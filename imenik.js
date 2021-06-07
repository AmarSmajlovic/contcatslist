function Imenik(){
    var ime = document.querySelector('#ime');
    var broj = document.querySelector('#broj');
    var kontaktiKonteiner = document.querySelector('.contacts');
    this.kontakti = [
        {ime:'Amar',brojTelefona:'061283086'},
        {ime:'Arman',brojTelefona:'06223284'},
        {ime:'Enver',brojTelefona:'062958431'},
        {ime:'Elvedin',brojTelefona:'060948573'},
        {ime:'Edita',brojTelefona:'061938267'},
        {ime:'Ajdin',brojTelefona:'062957837'},
    ];
    this.dodajKontakt = function(){
        kontaktiKonteiner.innerHTML = '';
       this.kontakti.push(new Kontakt(ime.value,broj.value));
       ime.value = '';
       broj.value = '';
       this.prikaziKontakte();
    }
    this.dodajEnter = function(e){
        if(e.keyCode ==13) {
            kontaktiKonteiner.innerHTML = '';
            this.kontakti.push(new Kontakt(ime.value,broj.value));
            ime.value = '';
            broj.value = '';
            this.prikaziKontakte();
        }
    }
    this.pretraziKontakt = function(ime){
        this.ime = ime;
       for(var i=0;i<this.kontakti.length;i++){
          if(this.ime === this.kontakti[i].ime) console.log(this.kontakti[i]);
          else throw console.error('Ne postoji kontakt koji trazite');
        }
    }
    
    
    
    this.prikaziKontakte = function(){
        for(var i=0;i<this.kontakti.length;i++){
            var contact = document.createElement('div');
            kontaktiKonteiner.appendChild(contact);
            contact.className = 'contact';
            var imeKontakta = document.createElement('p');
            contact.appendChild(imeKontakta);
            contact.innerText = this.kontakti[i].ime;
            var brojKontakta = document.createElement('p');
            contact.appendChild(brojKontakta);
            brojKontakta.innerText = this.kontakti[i].brojTelefona;
            var buttonsDiv = document.createElement('div');
            buttonsDiv.classList.add('buttonsDiv');
            contact.appendChild(buttonsDiv);
            var editBtn = document.createElement('button');
            buttonsDiv.appendChild(editBtn);
            editBtn.innerHTML = 'EDIT';
            editBtn.addEventListener('click',function(e){
                if(e.target.tagName == 'BUTTON'){
                    var button = e.target;
                    if(button.textContent == 'EDIT'){
                        var buttonDodaj = document.querySelector('#dodaj');
                        var imeInput = document.querySelector('#ime');
                         imeInput.value = button.parentNode.parentNode.firstChild.textContent;
                         var brojInput = document.querySelector('#broj');
                         brojInput.value = button.parentNode.parentNode.children[0].textContent;
                         buttonDodaj.innerText = 'EDIT';
                         if(buttonDodaj.textContent = 'EDIT'){
                             buttonDodaj.addEventListener('click',function(){
                                button.parentNode.parentNode.firstChild.textContent = imeInput.value;
                                button.parentNode.parentNode.children[0].textContent = brojInput.value;
                                buttonDodaj.innerText = 'DODAJ';
                                 imeInput.value = '';
                                 brojInput.value = '';
                             })
                         }

                    }
                }
            })
            var removeBtn = document.createElement('button');
            buttonsDiv.appendChild(removeBtn);
            removeBtn.innerHTML = 'REMOVE';
            removeBtn.addEventListener('click',function(e){
                if(e.target.tagName == 'BUTTON'){
                    var button = e.target;
                    kontaktiKonteiner.removeChild(button.parentNode.parentNode);
                }

            })
        }
    };

    
    this.prikaziKontakte();
    
  
    
}

function Kontakt(ime,brojTelefona){
    this.ime = ime;
    this.brojTelefona = brojTelefona;
}
