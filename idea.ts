/* Definition of the plugin state */
type PluginStateDefinition = {
    [Property in string]: VariableDefinition<any>;
};

class VariableDefinition<T> {
    private _value: T;
    private _choices?: T[];
    private _userDefined: boolean = false;

    private constructor(value: T) {
        this._value = value;
    }

    public static create<T>(value: T) {
        return new VariableDefinition<T>(value);
    }

    userDefined() {
        this._userDefined = true;
        return this;
    }

    internal() {
        this._userDefined = false;
        return this;
    }

    choices(choices: T[]) {
        this._choices = choices;
        return this;
    }
}

/* The actual plugin state */
class Variable<T> {
    private _value: T;

    constructor(value: T) {
        this._value = value;
    }

    getValue(): T {
        return this._value;
    }

    async setValue(value: T): Promise<void> {
        this._value = value;
    }
}
type PluginState<C extends PluginStateDefinition> = {
    [Property in keyof C]: C[Property] extends VariableDefinition<infer V>
        ? Variable<V>
        : never;
};

/* Plugin context */
type PluginContextType = "global" | "station";

type PluginContext<T extends PluginContextType> = T extends "global"
    ? GlobalPluginContext
    : StationPluginContext;

class GlobalPluginContext {}

class StationPluginContext extends GlobalPluginContext {
    async getStationName(): Promise<string> {
        return "";
    }

    async getStationLocation(): Promise<[number, number]> {
        return [0, 0];
    }

    async getStationSensors(): Promise<
        { slug: string; element: string; unit: string }[]
    > {
        return [];
    }

    async getStationCurrentSensorReadings(): Promise<
        { slug: string; value: number | string | null; unit: string }[]
    > {
        return [];
    }
}

type PluginOptions<
    S extends PluginStateDefinition,
    T extends PluginContextType
> = {
    name: string;
    version: `${number}.${number}.${number}`;
    dependencies?: `${any}@${number}.${number}.${number}`[];
    stateParams?: S;
    context: T;

    pages?: {
        slug: string;
        name: { [Property in string]: string } | string;
        icon: string;
        template: string;
        dependencies: (
            | keyof S
            | "stationName"
            | "sensors"
            | `sensor#${string}`
            | "stationLocation"
        )[];
    }[];

    install?: (
        context: PluginContext<T>,
        state: PluginState<S>
    ) => Promise<void>; // only happens once on install
    run?: (context: PluginContext<T>, state: PluginState<S>) => void; // happens on every startup
    uninstall?: (
        context: PluginContext<T>,
        state: PluginState<S>
    ) => Promise<void>; // only happens once on uninstall
};

class PluginCreator {
    static create<C extends PluginStateDefinition, T extends PluginContextType>(
        options: PluginOptions<C, T>
    ) {}
}
const plugin = PluginCreator.create({
    name: "DWD Rain Radar",
    version: "1.0.0",
    context: "station",

    stateParams: {
        // stored in database, accessible through rest api (partly configurable by user)
        apiKey: VariableDefinition.create("sdfsdlfjsdlkflskdjf"),
        other: VariableDefinition.create(true)
            .userDefined()
            .choices([true, false]),
    },

    pages: [
        {
            name: "Rain Radar",
            icon: "img/icon.svg",
            slug: "rain-radar",
            template: "pages/rain-radar.vash",
            dependencies: ["apiKey", "stationLocation", "stationName"],
        },
    ],

    install: async (ctx, state) => {
        await state.apiKey.setValue("sdf");
    },

    run: async (ctx, state) => {},

    uninstall: async (ctx, state) => {
        await state.apiKey.setValue("sdf");
    },
});

export type test = string extends "" ? true : false;

/**
 * ```
 *  |_dist
 *    |_create.js
 *  |_src
 *  |_assets
 *    |_logo.svg
 * ```
 */
const structure = 3;
