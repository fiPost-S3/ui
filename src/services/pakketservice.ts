import PackageModel from '@/classes/PackageModel';
import http from './http';

export default class PakketService {
 public async getAll(): Promise<Array<PackageModel>> {
    const response =  await http.get(`/api/packages`);
    return response.data;
  }
}

// A singleton instance
export const pakketService = new PakketService();