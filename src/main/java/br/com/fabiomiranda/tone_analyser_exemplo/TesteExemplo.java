package br.com.fabiomiranda.tone_analyser_exemplo;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.ibm.watson.developer_cloud.tone_analyzer.v3.ToneAnalyzer;
import com.ibm.watson.developer_cloud.tone_analyzer.v3.model.ToneAnalysis;



@Path("teste")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TesteExemplo {
	

	    @POST
	    public String getIt(String text) {

			ToneAnalyzer service = new ToneAnalyzer(ToneAnalyzer.VERSION_DATE_2016_05_19);
			service.setUsernameAndPassword("yourUsername", "yourPassword");

			// Call the service and get the tone
			ToneAnalysis tone = service.getTone(text, null).execute();

			return tone + "";
	              	        
	    }
	    
	

}
