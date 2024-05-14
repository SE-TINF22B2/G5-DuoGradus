import { FitnessRepository } from '../../../db/repositories/fitness.repository';
import { FitnessData } from '../fitness.data';

export class FitBitProvider {

  private const FITBIT_API = 'https://www.fitbit.com/';

  constructor(
    private fitnessRepository: FitnessRepository
  ) {}

  private async getAccessToken(user: string): Promise<string> {
    const credentials = await this.fitnessRepository.getProviderForUser(user);

    if (!credentials)
        throw new Error('No credentials found for user')

    // Construct the URL
    const authorizeURL = new URL(`${this.FITBIT_API}/oauth2/token`)
    authorizeURL.searchParams.append('client_id', process.env.FITBIT_CLIENT_ID);
    authorizeURL.searchParams.append('refresh_token', credentials?.refreshToken);
    authorizeURL.searchParams.append('grant_type', 'authorization_code');

    // Retrieve the access token from the server
    const response = await fetch(authorizeURL.toString(), {
      headers: {
        'Authorization': btoa(`${process.env.FITBIT_CLIENT_ID}:${process.env.FITBIT_CLIENT_SECRET}`)
      }
    });

    if (!response.ok)
      throw new Error('No access token received from server')

    const { access_token, refresh_token, expires_in } = await response.json();

    // Persist the access token in the background, to make the request faster
    setTimeout(async () => {
      // Persist the access token & refresh token
      // const provider = this.fitnessRepository.update
    });
  }

  public getUserActivities(user: string): Promise<FitnessData> {
    const credentials = await this.getAccessToken(user);

    // Retrieve fitness goals
    const goalResponse = 

    throw Error("Invalid");
  }

}