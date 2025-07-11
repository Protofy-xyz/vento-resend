import { Protofy, Schema, BaseSchema, getLogger, ProtoModel, SessionDataType, z  } from 'protobase'

const logger = getLogger()
Protofy("features", {})

export const Base{{name}}Schema = Schema.object(Protofy("schema", {}))

//check if any of the fields of the schema has set the id flag
const hasId = Object.keys(Base{{name}}Schema.shape).some(key => Base{{name}}Schema.shape[key]._def.id)

export const {{name}}Schema = Schema.object({
    ...(!hasId? BaseSchema.shape : {}),
    ...Base{{name}}Schema.shape
});

export type {{name}}Type = z.infer<typeof {{name}}Schema>;

export class {{name}}Model extends ProtoModel<{{name}}Model> {
    constructor(data: {{name}}Type, session?: SessionDataType, ) {
        super(data, {{name}}Schema, session, "{{name}}");
    }

    public static getApiOptions() {
        return Protofy("api", {
            "name": "{{lowername}}",
            "prefix": "/api/v1/"
        })
    }

    create(data?):{{name}}Model {
        const result = super.create(data)
        return result
    }

    read(extraData?): {{name}}Type {
        const result = super.read(extraData)
        return result
    }

    update(updatedModel: {{name}}Model, data?: {{name}}Type): {{name}}Model {
        const result = super.update(updatedModel, data)
        return result
    }

	list(search?, session?, extraData?, params?, jsCode?): {{name}}Type[] {
        const result = super.list(search, session, extraData, params, jsCode)
        return result
    }

    delete(data?): {{name}}Model {
        const result = super.delete(data)
        return result
    }

    protected static _newInstance(data: any, session?: SessionDataType): {{name}}Model {
        return new {{name}}Model(data, session);
    }

    static load(data: any, session?: SessionDataType): {{name}}Model {
        return this._newInstance(data, session);
    }
}
