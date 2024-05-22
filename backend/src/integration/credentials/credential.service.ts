import { Injectable } from '@nestjs/common';

@Injectable()
export class CredentialService {
  private credentials: Map<string, any> = new Map();

  constructor() {}

  public saveCredential(key: string, value: any) {
    this.credentials[key] = value;
  }

  public getCredential(key: string): any | null {
    return this.credentials[key];
  }
}
