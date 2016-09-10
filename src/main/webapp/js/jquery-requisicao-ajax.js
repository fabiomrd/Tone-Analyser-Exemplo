$(document).ready(function(){
	

	
	
	
	
//	 var dado = {"firstName":"John", "lastName":"Doe"};
//	 $.adicionarParaModelo(dado);
	
	
       $("#btnEnviar").click(function(){	   
    	   var dado = $("#text-painel").val();
    	   debugger
    	   

    	   $.ajax({
    		    type: "POST",
    		    url: '/tone-analyser-exemplo/webapi/teste',
    		    data: dado,
    		    contentType: 'application/json',
    		    dataType: "json",
    		    success: function (data) {
    		    	
    		    	debugger;
    		    	
    		    	  $.adicionarParaModelo(data);
    		    	  
    		    	 // $.adicionarParaFigura(data);
    		      
    		        debugger;
    		    },
    		    error: function(result) {
                    alert("dado não encontrado");
                    debugger;
                }
    	   
    		});
       });
       
       
       
       $.adicionarParaModelo = function (data){
    	   debugger;
    	   
    	   var listaEmocao = [];
    	   var listaTendenciaSocial = [];
    	   var listaEstiloLinguagem = [];
    	   
    	   
    	   if(data!=null){
    	   
    	  listaEmocao = [	"emocao","Sentimentos/Emoção do Texto","#008ee4","Raiva","Nojo","Medo","Alegria","Tristeza",
							data.document_tone.tone_categories[0].tones[0].score*100,
							data.document_tone.tone_categories[0].tones[1].score*100,
							data.document_tone.tone_categories[0].tones[2].score*100,
							data.document_tone.tone_categories[0].tones[3].score*100,
							data.document_tone.tone_categories[0].tones[4].score*100,1		
    	                ]
    	  
   	      listaTendenciaSocial = [	"tendencia-social","Tendência Social","#44cc00","Analítico","Confiança","","","Experimental",
   	                             data.document_tone.tone_categories[1].tones[0].score*100,
   	                             data.document_tone.tone_categories[1].tones[1].score*100,
   	                             0,
   	                             0,
   	                             data.document_tone.tone_categories[1].tones[2].score*100,
   	                             ,1	
   	        	                ]
   	    	      
   	     listaEstiloLinguagem = [	"estilo-linguagem","Estilo de Linguagem","#3b00b3","Abertura","Conscienciosidade","Extroversão","Afabilidade","Escala Emocional",
   	                            data.document_tone.tone_categories[2].tones[0].score*100,
   								data.document_tone.tone_categories[2].tones[1].score*100,
   								data.document_tone.tone_categories[2].tones[2].score*100,
   								data.document_tone.tone_categories[2].tones[3].score*100,
   								data.document_tone.tone_categories[2].tones[4].score*100,1	
   	        	                ]
    	  debugger;
    	   
    	   }
    	   else
    		   {
    		   debugger;
    		   
    	      listaEmocao = [	"emocao","Sentimentos/Emoção do Texto","#008ee4",
    		                	"Raiva",
    		                	"Nojo",
    		                	"Medo",
    		                	"Alegria",
    		                	"Tristeza",
    							0,0,0,0,0,100		
        	                ]
    	      
    	      listaTendenciaSocial = [	"tendencia-social","Tendência Social","#44cc00",
    		                	"Analítico",
    		                	"Confiança",
    		                	"",
    		                	"",
    		                	"Experimental",
    							0,0,0,0,0,100		
        	                ]
    	      
    	      listaEstiloLinguagem = [	"estilo-linguagem","Estilo de Linguagem","#3b00b3",
    		                	"Abertura",
    		                	"Conscienciosidade",
    		                	"Extroversão",
    		                	"Afabilidade",
    		                	"Escala Emocional",
    							0,0,0,0,0,100		
        	                ]
    		   
    		   }
    	   
    	   $.adicionarParaFigura(listaEmocao);
    	   $.adicionarParaFigura(listaTendenciaSocial);
    	   $.adicionarParaFigura(listaEstiloLinguagem);
    	   
       }
       
       $.adicionarParaFigura = function (lista){
  		 
  		 $(".radar-chart-"+ lista[0]).insertFusionCharts({
  			  type: 'radar',
  			  width: '100%',
  			  height: '500',
  			  dataFormat: 'json',
  			  dataSource: {
  			    "chart": {
  			      "caption": lista[1],
  			      "captionFontSize": "22",
  			      "numberPrefix": "%",
  			      "baseFont": "Open Sans",
  			      "baseFontSize": "14",
  			      "paletteColors": lista[2],
  			      "bgColor": "#ffffff",
  			      "radarfillcolor": "#ffffff",
  			      "showCanvasBorder": "0",
  			      "legendShadow": "0",
  			      "divLineAlpha": "35",
  			      "usePlotGradientColor": "0",
  			      "numberPreffix": "%",
  			      "legendBorderAlpha": "0",
  			      "yAxisMaxValue": lista[13],

  			      // line and anchor customizations
  			      "anchorRadius": "4",
  			      "anchorBorderThickness": "2",
  			      "anchorTrackingRadius": "20",
  			      "showHoverEffect": "1",

  			      // tool tip customizations
  			      "toolTipColor": "#e0e4e6",
  			      "toolTipBorderColor": "#e0e4e6",
  			      "toolTipBorderThickness": "1",
  			      "toolTipBgColor": "#000000",
  			      "toolTipBgAlpha": "70",
  			      "toolTipBorderRadius": "2",
  			      "toolTipPadding": "10",
  			      "plotToolText": "<div style='text-align:center; line-height:1.5;'>$seriesname <br> $label: $dataValue</div>"

  			    },
  			    "categories": [{
  			      "category": [{
  			        "label": lista[3]
  			      }, {
  			        "label": lista[4]
  			      }, {
  			        "label": lista[5]
  			      }, {
  			        "label": lista[6]
  			      }, {
  			        "label": lista[7]
  			      }]
  			    }],
  			    "dataset": [{
  			      "seriesname": "",
  			      "data": [{
  			        "value": lista[8]
  			      }, {
  			        "value": lista[9]
  			      }, {
  			        "value": lista[10]
  			      }, {
  			        "value": lista[11]
  			      }, {
  			        "value": lista[12]
  			      }]
  			    }]
  			  }
  			});
  	 }
       var data = null;
       $.adicionarParaModelo(data);
       
});



