class automatController{

     constructor(){
          this.initialize();
          this.$inputStates = document.querySelector('#states');
          this.$inputWords = document.querySelector('#words');
          this.$inicial = document.querySelector('#inicial');
          this.$final = document.querySelector('#final');
     }

     initialize(){
         this.initEvents();
     }

     initEvents(){
          let $result = document.querySelector('#resultTitle')
          let $buttonAdd = document.querySelector('#button');
          let $buttonTest = document.querySelector('#buttonWords');
          let statesAll = [];
          let letter = [];

          $buttonAdd.addEventListener('click', e=>{
               statesAll.push(this.inputStates.split(','));
               this.inputStates = ""
               console.log(statesAll)                    
          },false);

          $buttonTest.addEventListener('click', e=>{
               letter = this.inputWords.split('');
               let aux = 0
               let initialState = 0
               let lastFinal
               let array = []
               let final = this.final

               initialState = (Number(statesAll[0][0]))
               
               for (let i = 0; i < statesAll.length; i++){

                    if(letter[aux] == statesAll[i][1] && Number(statesAll[i][0]) == initialState){                                       
                         lastFinal = statesAll[i][2]
                         aux = aux + 1
                         initialState = Number(statesAll[i][2])
                         array.push(statesAll[i][0]) 
               }
             
          }
          if(letter.length == array.length && final == lastFinal){
               $result.innerHTML = 'ACEITA'
  
          }else{
               $result.innerHTML = 'REJEITA'
  
          } 
     })
} 
     get inicial(){
          return this.$inicial.value;
     }
     set inicial(value){
          this.$inicial.value = value
     }
     
     get final(){
          return this.$final.value;
     }
     set final(value){
          this.$final.value = value
     }

     get inputStates(){
          return this.$inputStates.value;
     }
     set inputStates(value){
          this.$inputStates.value = value
     }

     get inputWords(){
          return this.$inputWords.value;
     }
     set inputWords(value){
          this.$inputWords.value = value
     }

     



}