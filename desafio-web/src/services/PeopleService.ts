import { IPeople } from "../interfaces/IPeople";
import { Api } from "./Api"
import { ApiExcepion } from "./ApiException";

const getAll = async (): Promise<IPeople[] | ApiExcepion> => {
    try {
        const { data } = await Api.get("/v1/people")
        return data;
    } catch (error: any) {
        return new ApiExcepion(error.message || "Erro ao buscar todos os registros de pessoas");
    }
};

const search = async (keywork: String): Promise<IPeople[] | ApiExcepion> => {
    try {
        const { data } = await Api.get("/v1/people/search?keyword="+keywork)
        return data;
    } catch (error: any) {
        return new ApiExcepion(error.message || "Erro ao buscar registros de pessoas com filtro");
    }
};

const create =async (people:IPeople): Promise<IPeople | ApiExcepion> => {
    try {
        const { data } = await Api.post<any>("/v1/people", people);
        return data;
    } catch (error: any) {
        return new ApiExcepion(error.message || "Erro ao criar nova Pessoa");
    }
}

const findById = async (id: Number): Promise<IPeople | ApiExcepion> => {
    try {
        const { data } = await Api.get("/v1/people/"+id)
        return data;
    } catch (error: any) {
        return new ApiExcepion(error.message || "Erro ao buscar registros de pessoas por id");
    }
};
    


export const PeopleService = {
    getAll,
    search,
    create,
    findById
}