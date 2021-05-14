import http from '@/services/http';
import Building from "@/classes/Building"
import BuildingRequest from '@/classes/requests/BuildingRequest';

export default class BuildingService {
  public async post(buildingModel: BuildingRequest): Promise<Building> {
    const response = await http.post(`/api/locations/buildings`, buildingModel);
    return response.data;
  }

  public async getAll(): Promise<Array<Building>> {
    const response = await http.get(`/api/locations/buildings`);
    return response.data;
  }

  public async getById(id): Promise<Building> {
    const response = await http.get(`/api/locations/buildings/${id}`);
    return response.data;
  }

  public async update(buildingModel: BuildingRequest, id: string): Promise<Building> {
    const response = await http.put(`/api/locations/buildings?id=${id}`, buildingModel);
    return response.data;
  }
}

export const buildingService = new BuildingService();