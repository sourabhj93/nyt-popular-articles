import axios from "axios";

export const getListOfArticles = async (periodValue: string) => {
  try {
    const response: any = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/${periodValue}.json?api-key=sgdCncesyIRnXSYAcv82KX2pfCMOcdAP`
    );
    return response.data.results;
  } catch (error: any) {
    console.error("Error:", error.message);
  }
};
