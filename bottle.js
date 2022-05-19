const bottleObj = {
    text1: 'пива на стене',
    text2: 'пива!',
    text3: 'Возьми одну, пусти по кругу,',
    butylok: 'бутылок',
    butylka: 'бутылка',
    butylki: 'бутылки',
    generateSongText: function () {
        let bottle;
        let bottleText1;
        let bottleText2;

        for(let i = 99; i > 0; i--){
            
          
            if(i > 10 && i <= 20){
                bottle = this.butylok;
            } else if(i % 10 === 1) {
              bottle = this.butylka
            } else if (i % 10 === 2 || i % 10 === 3 || i % 10 === 4){
              bottle = this.butylki
            } else {
              bottle = this.butylok
            }
        bottleText1 = `${i} ${bottle} ${this.text1}, ${i} ${bottle} ${this.text2}`
          console.log(bottleText1)
            if(i - 1 > 0){
              if((i - 1) > 10 && (i - 1) <= 20){
                bottle = this.butylok;
            } else if((i - 1) % 10 === 1) {
              bottle = this.butylka
            } else if ((i - 1) % 10 === 2 || (i - 1) % 10 === 3 || (i - 1) % 10 === 4){
              bottle = this.butylki
            } else {
              bottle = this.butylok
            }
          bottleText2 = `${this.text3} ${i - 1} ${bottle} ${this.text1}`
          console.log(bottleText2)
            } else {
              console.log(`${this.text3} нет бутылок ${this.text1}`)
            }
        }
    }
}