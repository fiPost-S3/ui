import PackageModel from '@/classes/PackageModel';
import http from './http';

export default class PakketService {

   private baseUrl: String = process.env.VUE_APP_PAKKET_SERVICE;

   public async getAll(): Promise<Array<PackageModel>> {
      console.log(process.env);
      console.log(process.env.VUE_APP_PAKKET_SERVICE);
      console.log(process.env.VUE_APP_BASE_URL);
      const response = await http.get(`${this.baseUrl}/api/packages`);
      return response.data;
   }
   public async post(packageModel): Promise<PackageModel> {
      const response = await http.post(`${this.baseUrl}/api/packages`, packageModel);
      return response.data;
   }
   public async get(id): Promise<PackageModel> {
      const response = await http.get(`${this.baseUrl}/api/packages/${id}`);
      return response.data;
   }
}

// A singleton instance
export const pakketService = new PakketService();
