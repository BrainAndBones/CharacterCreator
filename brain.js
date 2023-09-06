const database = [
    [3,9,11,15,19,22,26,29,30,31,32,33,36,40,43,47],
    [1,2,3,4,8,12,15,19,22,23,24,25,29,33,36,40,43,44,45,46],
    [2,3,4,8,12,15,22,29,36,40,44,45,46],
    [1,2,3,4,8,11,12,15,19,22,26,29,33,36,39,40,43,44,45,46],
    [1,2,3,4,5,8,15,22,23,24,25,29,36,43,44,45,46,47],
    [1,2,3,4,5,8,15,22,23,24,25,29,36,43],
    [2,3,4,8,12,15,22,29,32,33,36,40,44,45,46],
    [1,5,8,12,15,19,22,23,24,25,26,29,33,36,40,43,47],
    [2,3,4,10,17,24,31,38,44,45,46],
    [3,4,5,11,18,25,32,36,39,44,45],
    [1,5,8,11,15,17,22,23,29,31,36,39,43,47],
    [1,8,15,22,29,36,43,44,45,46,47],
    [1,5,8,9,11,12,15,17,19,22,26,29,33,36,40,43,47],
    [1,5,8,12,15,16,19,22,24,26,29,32,33,36,40,43,47],
    [2,3,4,8,12,15,19,22,26,29,33,36,40,44,45,46],
    [1,2,3,4,8,12,15,19,22,23,24,25,29,36,43],
    [2,3,4,8,12,15,19,22,26,29,31,33,36,39,44,45,47],
    [1,2,3,4,8,12,15,19,22,23,24,25,29,31,36,39,43,47],
    [2,3,4,8,12,15,23,24,25,33,36,40,44,45,46],
    [1,2,3,4,5,10,17,24,31,38,45],
    [1,5,8,12,15,19,22,26,29,33,36,40,44,45,46],
    [1,5,8,12,15,19,22,26,29,33,37,39,45],
    [1,5,8,12,15,19,22,26,29,31,33,36,37,39,40,43,47],
    [1,5,8,12,16,18,24,30,32,36,40,43,47],
    [1,5,8,12,16,18,24,31,38,45],
    [1,2,3,4,12,18,24,30,36,44,45,46,47],
    [2,3,4,8,12,15,16,19,22,24,26,29,32,33,36,40,44,45,46],
    [3,9,10,17,24,31,38,44,45,46],
    [2,3,4,8,12,19,25,31,37,43,44,45,46,47],
    [2,3,4,8,12,19,24,25,26,33,36,40,44,45,46],
    [3,4,9,11,15,18,22,23,24,25,26,32,39,46],
    [1,2,3,4,5,8,15,16,17,18,26,33,40,43,44,45,46],
    [2,3,4,8,15,22,23,24,25,29,33,36,40,44,45,46],
    [1,2,3,4,5,12,18,24,30,37,44],
    [2,3,4,8,12,15,19,23,24,25,29,33,36,40,44,45,46],
    [2,3,4,8,12,15,19,23,24,25,26,33,40,47],
    [2,3,4,8,12,18,24,31,45],
    [3,10,17,24,31,45]
  ];
  const options = "abcdefghijklmnopqrstuvwxyz0123456789?!";
  var newMsg = "";
  var copiedMsg = "";
  var inputmsg;
  var block1 = "⬛️";
  var block2 = "⬜️";
  function closeIt(){
    log.style.bottom ='-50%';
    log.innerHTML="";
    newMsg = "";
  }
  function close2(){
    block1 = document.getElementById("backGround").value;
    block2 = document.getElementById("mainBlock").value;
    log.style.bottom ='-50%';
    log.innerHTML="";
  }
  function copyMsg(){
    var text = copiedMsg;
    var code = document.createElement("textarea");
    code.innerHTML = text;//text.innerHTML;
    document.body.appendChild(code);
    code.select();
    document.execCommand("copy");
    document.body.removeChild(code);
    alert("Copied");
    }
  init = () => {
      
      var message = `<button style="background: gray; border-radius: 1vmin; float: right;" 
    onclick="closeIt()" >Close</button><button style="background: gray; border-radius: 1vmin; float: left;"
    onclick="copyMsg()">Copy</button><br /> 
    Copy-n-Paste Message Created:<br />`;
    var message2 = `<button style="background: gray; border-radius: 1vmin; float: right;" 
    onclick="close2()" >Close</button><br /> 
    Box Options or Enter Any Character:<br /><br /><input type="text" id="mainBlock" placeholder="Main Block" list="blocks"></input>
    <input type="text" id="backGround" placeholder="Background Block" list="blocks"></input><br /><br />`;
    
      function dLog(msg) {
          log.style.bottom = '0';
          log.style.height = 'fit-content';
          log.style.textAlign = 'center';
          newMsg += msg;
          log.innerHTML = `${message} ${newMsg}<br />`;
      }
      function cLog(msg) {
        copiedMsg += msg;
    }
      settings.addEventListener("click", open);
      function open(){
        log.style.bottom = '0';
        log.style.height = 'fit-content';
        log.innerHTML = `${message2}<br />`;
      }
      createButton.addEventListener("click", process);
      function process(){
          inputmsg = input.value;
          for(num = 0; num < inputmsg.length; num++){
            if(inputmsg[num]==' '){
              for(a=0;a<3;a++){
                for(b=0;b<7;b++){
                  dLog(block1);
                  cLog(block1);
                }
                dLog(`<br />`);
                cLog('\n');
              }
            }
            else{
              logLetter(inputmsg[num]);
            }
          }
          input.value = "";
      }
      function logLetter(letter){
        num1 = options.indexOf(letter.toLowerCase());
        num2 = 0;
        for(i=-7; i < 56; i++){
            if(i%7==0&&i!=-7){dLog(`<br />`);cLog('\n')}
            if(i == database[num1][num2]){
              dLog(block2);
              cLog(block2);
              num2++;
            }
            else{dLog(block1);cLog(block1);}
        }
        dLog(`<br />`);
        cLog('\n');
      }
    }
      onload = init;
