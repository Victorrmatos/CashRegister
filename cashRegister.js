function checkCashRegister(price, cash, cid) {
  let inreg=0;
  let status='OPEN';
  let change=cash-price;
  let carray=[]
  let notHundred=0
  let notTwenty=0
  let notTen=0
  let notFive=0
  let notOne=0
  let notQuarter=0
  let notDime=0
  let notNickel=0

function getLastNdigits(number, n) {
  return Number(String(number).slice(-n));
}
function getChangeFloor(n) {
  return (Math.floor(change/n)*n)
}
  //add up register inreg
  for (let i=0; i< cid.length; i++){  
      inreg+=cid[i][1]
      };
inreg=(Math.round((inreg + Number.EPSILON) * 100) / 100);
const entries = new Map(cid);
const objcid = Object.fromEntries(entries);

//check if funds are insufficient
  if (cash<price || change == "" || change>inreg || getLastNdigits(change, 2)/10>(objcid['PENNY']+objcid['NICKEL']+objcid['DIME']+objcid['QUARTER'])){
    status="INSUFFICIENT_FUNDS"
    carray=[]
var obj={ status: status, change: carray };
console.log(obj)
  return obj;
  }
  //if change takes all funds
   else if(change==inreg){
      status="CLOSED"
      change=""
var obj={ status: status, change: cid };
console.log(obj)
  return obj;
      
    }
    //if there are enough funds
    else if ((typeof change == 'number') && change<inreg && cash>price){
      
      //values
      while(change>0 && typeof change == 'number'){

//HUNDRED

      if ((change>=100 && objcid['ONE HUNDRED']>0) && notHundred==0){
        //if there is more hundreds in the drawer than needed for change
        if (objcid['ONE HUNDRED']>=getChangeFloor(100)){
          carray.push(['ONE HUNDRED',getChangeFloor(100)])
          objcid['ONE HUNDRED']-=getChangeFloor(100)
          change-=getChangeFloor(100)
       
          // some hundreds but not enough
        } else if(objcid['ONE HUNDRED']>=0 && objcid['ONE HUNDRED']<getChangeFloor(100)){
          carray.push(['ONE HUNDRED',objcid['ONE HUNDRED']])
          change-=objcid['ONE HUNDRED']
          objcid['ONE HUNDRED']=0
          notHundred=1
        }else if (change!=0 && (objcid['PENNY']+objcid['NICKEL']+objcid['DIME']+objcid['QUARTER']+objcid['ONE']+objcid['FIVE']+objcid['TEN']+objcid['TWENTY'])<change && objcid['TWENTY']<getChangeFloor(20)){
          status="INSUFFICIENT_FUNDS"
          change=''
        } } 
//TWENTY
        else if (((change>=20 || objcid['ONE HUNDRED']<getChangeFloor(100))&& objcid['TWENTY']>0) && notTwenty==0){
    
        if (objcid['TWENTY']>=getChangeFloor(20)){
          
          carray.push(['TWENTY',getChangeFloor(20)])
          objcid['TWENTY']-=getChangeFloor(20)
          change-=getChangeFloor(20)
          notTwenty=1
        } else if(objcid['TWENTY']>=0 && objcid['TWENTY']<getChangeFloor(20)){
          
          carray.push(['TWENTY',objcid['TWENTY']])
          change-=objcid['TWENTY']
          objcid['TWENTY']=0
          notTwenty=1
        }else if (change!=0 && (objcid['PENNY']+objcid['NICKEL']+objcid['DIME']+objcid['QUARTER']+objcid['ONE']+objcid['FIVE']+objcid['TEN'])<change && objcid['TEN']<getChangeFloor(10)){
          status="INSUFFICIENT_FUNDS"
          change=''
        } } 
 //TEN
 //
        else if (((change>=10 || objcid['ONE HUNDRED'] < getChangeFloor(100)) ||( objcid['TWENTY'] < getChangeFloor(20))) && notTen == 0 && objcid['TEN']>0){
        if (objcid['TEN']>=getChangeFloor(10)){
          carray.push(['TEN',getChangeFloor(10)])
          objcid['TEN']-=getChangeFloor(10)
          change-=getChangeFloor(10)
          
        } else if(objcid['TEN']>=0 && objcid['TEN']<getChangeFloor(10)){
          carray.push(['TEN',objcid['TEN']])
          change-=objcid['TEN']
          objcid['TEN']=0
          notTen=1
        }else if (change!=0 && (objcid['PENNY']+objcid['NICKEL']+objcid['DIME']+objcid['QUARTER']+objcid['ONE']+objcid['FIVE'])<change && objcid['FIVE']<getChangeFloor(5)){
          status="INSUFFICIENT_FUNDS"
          change=''
        } } 
        //FIVE
                else if ((change>=5 || objcid['ONE HUNDRED']<getChangeFloor(100) || objcid['TWENTY']<getChangeFloor(20) || objcid['TEN']<getChangeFloor(10)) && notFive==0 && objcid['FIVE']>0){
        if (objcid['FIVE']>=getChangeFloor(5)){
          carray.push(['FIVE',getChangeFloor(5)])
          objcid['FIVE']-=getChangeFloor(5)
          change-=getChangeFloor(5)
 
        } else if(objcid['FIVE']>=0){
          carray.push(['FIVE',objcid['FIVE']])
          change-=objcid['FIVE']
          objcid['FIVE']=0
          notFive=1
        } else if (change!=0 && (objcid['PENNY']+objcid['NICKEL']+objcid['DIME']+objcid['QUARTER']+objcid['ONE'])<change && objcid['ONE']<getChangeFloor(1)){
          status="INSUFFICIENT_FUNDS"
          change=''


        } } 
        //ONE
                else if ((change>=1  || objcid['ONE HUNDRED']<getChangeFloor(100) || objcid['TWENTY']<getChangeFloor(20) || objcid['TEN']<getChangeFloor(10) || objcid['FIVE']<getChangeFloor(5)) && notOne==0  && objcid['ONE']>0){
                 
        if (objcid['ONE']>=getChangeFloor(1)){
          carray.push(['ONE',getChangeFloor(1)])
          objcid['ONE']-=getChangeFloor(1)
          change-=getChangeFloor(1)
          console.log('aaaaaaaaaaaaaaaa')
         
        }  else if(objcid['ONE']>=0){
          carray.push(['ONE',objcid['ONE']])
          change-=objcid['ONE']
          objcid['ONE']=0
          notOne=1
        
        }else if (change!=0 && (objcid['PENNY']+objcid['NICKEL']+objcid['DIME']+objcid['QUARTER'])<change && objcid['QUARTER']<getChangeFloor(0.25) && getLastNdigits(change, 2)/100>(objcid['PENNY']+objcid['NICKEL']+objcid['DIME']+objcid['QUARTER'])){
          console.log('cccccccc')
          status="INSUFFICIENT_FUNDS"
          change=''

        } } 
        //QUARTER
                else if ((change>=0.25  || objcid['ONE HUNDRED']<getChangeFloor(100) || objcid['TWENTY']<getChangeFloor(20) || objcid['TEN']<getChangeFloor(10) || objcid['FIVE']<getChangeFloor(5) || objcid['ONE']<getChangeFloor(1) ) && notQuarter==0  && objcid['QUARTER']>0){
        if (objcid['QUARTER']>=getChangeFloor(0.25)){
          carray.push(['QUARTER',getChangeFloor(0.25)])
          objcid['QUARTER']-=getChangeFloor(0.25)
          change-=getChangeFloor(0.25)
          
        } else if(objcid['QUARTER']>=0){
          carray.push(['QUARTER',objcid['QUARTER']])
          change-=objcid['QUARTER']
          objcid['QUARTER']=0
          notQuarter=1
        }else if (change!=0 && (objcid['PENNY']+objcid['NICKEL']+objcid['DIME'])<change && objcid['DIME']<getChangeFloor(0.1) && getLastNdigits(change, 2)/100>(objcid['PENNY']+objcid['NICKEL']+objcid['DIME'])){
          status="INSUFFICIENT_FUNDS"
          change=''

        } }
        //DIME 
                        else if ((change>=0.1  || objcid['ONE HUNDRED']<getChangeFloor(100) || objcid['TWENTY']<getChangeFloor(20) || objcid['TEN']<getChangeFloor(10) || objcid['FIVE']<getChangeFloor(5) || objcid['ONE']<getChangeFloor(1) || objcid['QUARTER']<getChangeFloor(0.25)) && notDime==0  && objcid['DIME']>0){
        if (objcid['DIME']>=getChangeFloor(0.1)){
          carray.push(['DIME',getChangeFloor(0.1)])
          objcid['DIME']-=getChangeFloor(0.1)
          change-=getChangeFloor(0.1)
         
        } else if(objcid['DIME']>=0){
          carray.push(['DIME',objcid['DIME']])
          change-=objcid['DIME']
          objcid['DIME']=0
          notDime=1
        }else if (change!=0 && (objcid['PENNY']+objcid['NICKEL'])<change && objcid['NICKEL']<getChangeFloor(0.05) && getLastNdigits(change, 2)/100>(objcid['PENNY']+objcid['NICKEL'])){
          status="INSUFFICIENT_FUNDS"
          change=''

        } } 
        //NICKEL
                        else if ((change>=0.05  || objcid['ONE HUNDRED']<getChangeFloor(100) || objcid['TWENTY']<getChangeFloor(20) || objcid['TEN']<getChangeFloor(10) || objcid['FIVE']<getChangeFloor(5) || objcid['ONE']<getChangeFloor(1) || objcid['QUARTER']<getChangeFloor(0.25) || objcid['DIME']<getChangeFloor(0.1)) && notNickel==0  && objcid['NICKEL']>0){
        if (objcid['NICKEL']>=getChangeFloor(0.05)){
          carray.push(['NICKEL',getChangeFloor(0.05)])
          objcid['NICKEL']-=getChangeFloor(0.05)
          change-=getChangeFloor(0.05)
         
        } else if(objcid['NICKEL']>=0){
          carray.push(['NICKEL',objcid['NICKEL']])
          change-=objcid['NICKEL']
          objcid['NICKEL']=0
          notNickel=1
        } else if (change!=0 && objcid['PENNY']<change && objcid['PENNY']<getChangeFloor(0.01) && getLastNdigits(change, 2)/100>(objcid['PENNY'])){
          status="INSUFFICIENT_FUNDS"
          change=''

        }  } 
                                else if (change>=0.01  && objcid['PENNY']>0){
                                  console.log('Penny')
        if (objcid['PENNY']>=getChangeFloor(0.01)){
         
          carray.push(['PENNY',parseFloat(change.toFixed(2))])
          objcid['PENNY']-=parseFloat(change.toFixed(2))
          change-=parseFloat(change.toFixed(2))
        } else {
          status="INSUFFICIENT_FUNDS"
          change=''

        } } 
        else{
             status="INSUFFICIENT_FUNDS_in_DRAWER"
          change=''
        }
      }
 
    
     var obj={
status: status,
change: carray
  };
console.log('price:')
console.log(price)
console.log('amount paid:')
console.log(cash)
console.log('change:')
console.log(cash-price)
console.log(obj)
console.log('register after change:')
console.log(objcid)

  return obj;
  
  
}
}

//checkCashRegister(price, amount paid, register before transaction)
checkCashRegister(40, 440, [["PENNY", 0], ["NICKEL", 440], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
