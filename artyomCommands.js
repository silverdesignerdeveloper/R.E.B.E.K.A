 /**
  * R.E.B.E.K.A commands examples. Just add this file after artyom is loaded in your document.
  * You can save all your commands in this file or simply follow the workflow :
  *
  * @copyright Silver Designer&Developer - Darkbit 2016
  * @author Silver Designer&Developer, Darkbit
  * @param {type} window
  * @see http://www.artyom-ai.com
  * @returns R.E.B.E.K.A
  */

(function(window){
    'use strict';

    /*
  		  R.E.B.E.K.A Commands
     */
    var artyomCommandCiaoResponse = 'Ciao, io sono Rebeka.';
    var artyomCommandsCiao = [
        //ciao
        {
            indexes: ['ciao'],
            action : function(i){
                artyom.say(artyomCommandCiaoResponse,{
                    onStart: function(){

	                    //io span
	                    var span = document.createElement('span');
	                    var messagebox = document.createElement('div');
	                    $(messagebox).attr('style','padding:5px;width:200px;background-color:lime;color:white;border-radius:25px; position:relative; right:10%; text-align: left; margin:6px;');
	                    span.setAttribute('id', 'io_span');
	                    span.setAttribute('style','color:#6e68e2; font-size:12px; font-style:italic;');
	                    span.textContent = "io:";

                      //io avatar
                      var ioAvatar = document.createElement('img');
                      ioAvatar.setAttribute('src', 'http://www.spectrumdesigns.co.za/wp-content/uploads/Avatar-9.jpg');
                      ioAvatar.setAttribute('width', '33');
                      ioAvatar.setAttribute('style', 'float:left;position:relative;right:23%;bottom:11px;border-radius:25px;');

	                    //Io MessageBox
                      $(messagebox).append(ioAvatar);
	                    $(messagebox).append(span);
	                    $(messagebox).append("<br/>" + artyomCommandsCiao[0].indexes);
	                    $('#center').append(messagebox);

                      console.log("Speaking");

					},
                    onEnd: function(){

	                   //rebeka span
	                   var spanR = document.createElement('span');
	                   var messagebox2 = document.createElement('div');
	                   $(messagebox2).attr('style','padding:10px;width:200px;background-color:lightgray;color:black;border-radius:25px;position:relative;left:10%;text-align: right;')
	                   $(messagebox2).append(spanR)
	                   spanR.setAttribute('id', 'span_rebeka');
	                   spanR.setAttribute('style','color:#6e68e2; font-size:12px; font-style:italic;');
	                   spanR.textContent = 'rebeka:';

	                   //Rebeka MessageBox

	                   $(messagebox2).append( "<br/>" + artyomCommandCiaoResponse);
	                   $('#center').append(messagebox2);

                     //auto-scrolling bottom
                     $(function () {
                               $("#chat, #center ").animate({
                     scrollTop: $('#chat, #center').get(0).scrollHeight
                 }, 2000);
               });
                       console.log("Tutto quello che dovevo dire è stato detto.");

                    }
                });
            }
        },

        {
            indexes: ['pronunciate * please'],
            smart:true,
            action : function(i,wildcard,recognized_text){
                console.log("Recognized : " + recognized_text,"Wildcard : "+wildcard);
                artyom.say(wildcard);
            }
        }
        // continue adding commands
    ];

    var artyomCommandsBuonaSera = [
       	//BuonaSera
        {
            indexes: ['buonasera'],
            action : function(i){
                artyom.say("buonasera",{
                    onStart: function(){
                        console.log("Speaking presentation");
					},
                    onEnd: function(){
                        console.log("Tutto quello che dovevo dire è stato detto.");
                    }
                });
            }
        },

        {
            indexes: ['pronunciate * please'],
            smart:true,
            action : function(i,wildcard,recognized_text){
                console.log("Recognized : " + recognized_text,"Wildcard : "+wildcard);
                artyom.say(wildcard);
            }
        }
        // continue adding commands
    ];


    var artyomCommandsHei = [ {
        //Hei
            indexes: ['ehi', 'hey', 'ei', 'oi', 'eilà', 'eila', 'rebi'],
            action : function(i){
                artyom.say("Mi ha chiamato signore?",{
                    onStart: function(){
                        console.log("Speaking");
                    },
                    onEnd: function(){
                        console.log("Tutto quello che dovevo dire è stato detto.");
                    }
                });
            }
        },

        {
            indexes: ['pronunciate * please'],
            smart:true,
            action : function(i,wildcard,recognized_text){
                console.log("Recognized : " + recognized_text,"Wildcard : "+wildcard);
                artyom.say(wildcard);
            }
        }
        ];

       var artyomCommandsComplimento1 = [ {
        //Complimento1
            indexes: ['Sei bellissima'],
            action : function(i){
                artyom.say("Grazie, signore. E' molto gentile da parte sua.",{
                    onStart: function(){
                        console.log("Speaking");
                    },
                    onEnd: function(){
                        console.log("Tutto quello che dovevo dire è stato detto.");
                    }
                });
            }
        },

        {
            indexes: ['pronunciate * please'],
            smart:true,
            action : function(i,wildcard,recognized_text){
                console.log("Recognized : " + recognized_text,"Wildcard : "+wildcard);
                artyom.say(wildcard);
            }
        }
        ];

        var artyomCommandsColori = [ {
        //colori
            indexes: ['rebeka dimmi un colore', 'un colore a caso'],
            action : function(i){
                artyom.sayRandom([
                "Rosso" , "Blu", "Giallo", "Verde", "Marrone", "Arancione", "Viola", "Lilla", "Fucsia", "Nero", "Bianco", "Grigio"]);
            }
        },

        {
            indexes: ['pronunciate * please'],
            smart:true,
            action : function(i,wildcard,recognized_text){
                console.log("Recognized : " + recognized_text,"Wildcard : "+wildcard);
                artyom.say(wildcard);
            }
        }
        ];

         var artyomCommandsPompoNelleCasse = [ {
        //colori
            indexes: ['Pompo nelle casse'],
            action : function(i){
                artyom.say('Pompo anche io');
            }
        },

        {
            indexes: ['pronunciate * please'],
            smart:true,
            action : function(i,wildcard,recognized_text){
                console.log("Recognized : " + recognized_text,"Wildcard : "+wildcard);
                artyom.say(wildcard);
            }
        }
        ];



         var artyomCommandsColorePreferito = [ {
        //Colore Preferito
            indexes: ['Rebeka, dimmi il tuo colore preferito', 'il tuo colore preferito?', 'colore preferito?'],
            action : function(i){
                artyom.say("Il mio colore preferito è il Blu",{
                    onStart: function(){
                        console.log("Speaking");
                    },
                    onEnd: function(){
                        console.log("Tutto quello che dovevo dire è stato detto.");
                    }
                });
            }
        },

        {
            indexes: ['pronunciate * please'],
            smart:true,
            action : function(i,wildcard,recognized_text){
                console.log("Recognized : " + recognized_text,"Wildcard : "+wildcard);
                artyom.say(wildcard);
            }
        }
        ];


    var artyomCommandsSalve = [
        //Salve
        {
            indexes: ['salve'],
            action : function(i){
                artyom.say("salve Signore.",{
                    onStart: function(){
                        console.log("Speaking presentation");
                    },
                    onEnd: function(){
                        console.log("Tutto quello che dovevo dire è stato detto.");
                    }
                });
            }
        },

        {
            indexes: ['pronunciate * please'],
            smart:true,
            action : function(i,wildcard,recognized_text){
                console.log("Recognized : " + recognized_text,"Wildcard : "+wildcard);
                artyom.say(wildcard);
            }
        }
       // continue adding commands
    ];

	var artyomCommandsBuonPomeriggio = [
        //Buon pomeriggio
        {
            indexes: ['buon pomeriggio'],
            action : function(i){
                artyom.say("Buon Pomeriggio, signore.",{
                    onStart: function(){
                        console.log("Speaking presentation");
                    },
                    onEnd: function(){
                        console.log("Tutto quello che dovevo dire è stato detto.");
                    }
                });
            }
        },

        {
            indexes: ['pronunciate * please'],
            smart:true,
            action : function(i,wildcard,recognized_text){
                console.log("Recognized : " + recognized_text,"Wildcard : "+wildcard);
                artyom.say(wildcard);
            }
        }
        ];

       var artyomCommandsInfoRebeka = [
        //Salve
        {
            indexes: ['chi sei?', 'chi ti ha creato', 'come ti chiami'],
            action : function(i){
                artyom.say("salve Signore. Sono rebeka, i miei creatori sono darkbit e silver",{
                    onStart: function(){
                        console.log("Speaking presentation");
                    },
                    onEnd: function(){
                        console.log("Tutto quello che dovevo dire è stato detto.");
                    }
                });
            }
        },

        {
            indexes: ['pronunciate * please'],
            smart:true,
            action : function(i,wildcard,recognized_text){
                console.log("Recognized : " + recognized_text,"Wildcard : "+wildcard);
                artyom.say(wildcard);
            }
        }
          ];

           //Go To Url
           var artyomCommandsOpenGoogle = {
              indexes: ['Apri * Google', 'cerca su google * '],
              smart:true,
              action : function(i, wildcard, sentence){
                       console.log(wildcard);
                     switch(i) {

                       case 0:
                       window.open('https://www.google.it');
                       break;

                       case 1:
                       window.open('https://www.google.it/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=' + wildcard);

                       break;

                     }

                   }
          };

          var artyomCommandsOpenFacebook = {
              indexes: ['Apri * Facebook', 'vai su * Facebook', 'facebook', 'faccialibro'],
              smart:true,
              action : function(i, wildcard, sentence){

                     switch(i) {

                       case 0:
                       window.open('https://www.facebook.com');
                       break;


                     }

                   }
          };

//           {
//           description:"Say what time is it",
//           indexes:['what time is it'],
//           action:function(){
//            var currentdate = new Date();
//            var datetime = "About the date : " + currentdate.getDate() + "/"
//                 + (currentdate.getMonth()+1)  + "/"
//                 + currentdate.getFullYear() + " @ "
//                 + currentdate.getHours() + ":"
//                 + currentdate.getMinutes() + ":"
//                 + currentdate.getSeconds();
//             document.getElementById('time').innerHTML = datetime;
//           }
//         },
//         {
//           description: "Smart command, say how much x in what we say",
//           indexes:["what's the number of *"],
//           smart:true,
//           action:function(i,wildcard){
//             document.getElementById('time').innerHTML = "The number of " + wildcard + ' is '+ Math.floor(Math.random() * 4000) + 1;
//           }
//         }
//       ]);


    artyom.addCommands(artyomCommandsCiao);
    artyom.addCommands(artyomCommandsSalve);
    artyom.addCommands(artyomCommandsInfoRebeka);
    artyom.addCommands(artyomCommandsBuonPomeriggio);
    artyom.addCommands(artyomCommandsOpenGoogle);
    artyom.addCommands(artyomCommandsOpenFacebook);
    artyom.addCommands(artyomCommandsColorePreferito);
    artyom.addCommands(artyomCommandsColori);
    artyom.addCommands(artyomCommandsBuonaSera);
	artyom.addCommands(artyomCommandsHei);
	artyom.addCommands(artyomCommandsComplimento1);
	artyom.addCommands(artyomCommandsPompoNelleCasse);

    /**
     * Or use the shorter and cleaner method :
     */
//
//     artyom.on(['Buon Giorno']).then(function(i){
//         alert("Buon Giorno ! Chi sei?");
//     });
//
//     artyom.on(['Repeat after me *'] , true).then(function(i, wildcard){
//         alert("You've said " + wildcard);
//     });

    console.log(artyom.getAvailableCommands());
})(window);
