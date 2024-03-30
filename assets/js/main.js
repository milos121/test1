window.onload = function(){

    //Meni
    function meni(){
    var nizMeni = [
        {title:"Početna", link: "index.html"},
        {title:"Novosti", link: "#novosti"},
        {title:"Galerija", link: "#gallery"},
        {title:"Popusti", link: "#popust"},
        {title:"Aranžmani", link: "#aranzmani"},
        {title:"Kontakt", link: "#pretplata"},
        {title:"REZERVACIJA", link: "#rez"}
    ];
    var ispisMeni ="";
    for(var i=0; i<nizMeni.length; i++){
        ispisMeni += "<li class='smooth-menu'><a href='" + nizMeni[i].link + "'>" + nizMeni[i].title + "</a></li>";
    }
    return ispisMeni;
    }

    document.getElementById("navigacija").innerHTML = meni();
    document.getElementsByClassName("smooth-menu")[6].innerHTML ="<a id='nav-btn-edit' href='#rez'><button class='book-btn'>REZERVACIJA</button></a>";
    
    //Ispis trenutnog datuma
    function datum(){
        var newDate = new Date();
        var datum = newDate.getDate();
        var mesec = newDate.getMonth();
        var godina = newDate.getFullYear();
    
        var mesecIme;
        switch(mesec){
            case 0:
                mesecIme = "Januar";
                break;
            case 1:
                mesecIme = "Februar";
                break;
            case 2:
                mesecIme = "Mart";
                break;
            case 3:
                mesecIme = "April";
                break;
            case 4:
                mesecIme = "Maj";
                break;
            case 5:
                mesecIme = "Jun";
                break;
            case 6:
                mesecIme = "Jul";
                break;
            case 7:
                mesecIme = "Avgust";
                break;
            case 8:
                mesecIme = "Septembar";
                break;
            case 9:
                mesecIme = "Oktobar";
                break;
            case 10:
                mesecIme = "Novembar";
                break;
            default:
                mesecIme = "Decembar";
        }
        var printDate = datum +  ". " + mesecIme + " " + godina;
        return printDate;
    }
    document.getElementById("datumIspis").innerHTML = datum();
    
    //Popnjavanje forme
    function sadrzajForme(){
    
        //Destinacije
        var destinacije = ["Rim", "London","Madrid","Beč","Pariz","Barselona"];
        var destinacijeSelect = "<select id='destinacijaSelected' class='form-control'><option value='0'>Izaberite destinaciju</option>";
        for(var i=0; i<destinacije.length; i++){
            destinacijeSelect += "<option value='" + [i+1] + "'>" + destinacije[i] + "</option>";
        }
        destinacijeSelect += "</select>";
        document.getElementById("destinacijaSelect").innerHTML = destinacijeSelect;
    
        //Odrasli
        var parentSelect = "<select id='brojOdraslih' class='form-control'><option value='0'>Izaberite</option>";
        for(var i=1; i<6; i++){
            parentSelect += "<option value='"+[i]+"'>"+[i]+"</option>";
        }
        parentSelect += "</select>";
        document.getElementById("odrasli").innerHTML = parentSelect;
    
        //Deca
        var childrentSelect = "<select id='brojDece' class='form-control'><option value='0'>Bez dece</option>";
        for(var i=1; i<6; i++){
            childrentSelect += "<option value='"+[i]+"'>"+[i]+"</option>";
        }
        childrentSelect += "</select>";
        document.getElementById("deca").innerHTML = childrentSelect;
    
    }
    sadrzajForme();
    
    //Validacija
    function validacija(){

        var podatak = [];

        var destinacija = document.getElementById("destinacijaSelected");
        var brojOdraslih = document.getElementById("brojOdraslih");
        var brojDece = document.getElementById("brojDece");
        var email1 = document.getElementById("email");
        var ime = document.getElementById("ime");
        var prezime = document.getElementById("prezime");
        var telefon = document.getElementById("telefon");

        var destinacije = destinacija.options[destinacija.selectedIndex].value;
        var odrasli = brojOdraslih.options[brojOdraslih.selectedIndex].value;
        var deca = brojDece.options[brojDece.selectedIndex].value;
        var email = email1.value;
        var name = ime.value;
        var lastName = prezime.value;
        var phone = telefon.value;

        var regEmail = /^[^\s]+@gmail\.com$/;
        var regName = /^[A-ZĐŠŽĆČ][a-zšđčćž]{2,11}$/;
        var regLast = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,15}$/;
        var regPhone = /^06[\d]\-[\d]{3}\-[\d]{3,4}$/;

        if(destinacije != 0){
            destinacija.style = "border:2px solid green";
            podatak.push(destinacije);
            destinacijaMistake.innerHTML = "";
        }else{
            destinacija.style = "border:2px solid red";
          destinacijaMistake.innerHTML = "Morate izabrati jednu destinaciju.";
        }

        if(odrasli != 0){
            brojOdraslih.style = "border:2px solid green";
            podatak.push(odrasli);
            odrasliMistake.innerHTML = "";
        }else{
            brojOdraslih.style = "border:2px solid red";
            odrasliMistake.innerHTML = "Morate izabrati broj odraslih osoba.";
        }

        if(deca != 0){
            brojDece.style = "border:2px solid green";
            podatak.push(deca);
        }

        if(regEmail.test(email)){
            email1.style = "border:2px solid green";
            podatak.push(email);
            emailMistake.innerHTML = "";
        }else{
            email1.style = "border:2px solid red";
            emailMistake.innerHTML = "Loš unos mejla. Primer: milos@gmail.com";
        }

        if(regName.test(name)){
           ime.style = "border:2px solid green";
           podatak.push(name);
            nameMistake.innerHTML = "";
            
        }else{
            ime.style = "border:2px solid red";
            potvrda = false;
            nameMistake.innerHTML = "Loše uneto ime. Primer: Petar";

        }

        if(regLast.test(lastName)){
            prezime.style = "border:2px solid green";
            podatak.push(lastName);
            lastMistake.innerHTML = "";
        }else{
            prezime.style = "border:2px solid red";
            lastMistake.innerHTML = "Loše uneto ime. Primer: Petrović";
        }

        if(regPhone.test(phone)){
            telefon.style = "border:2px solid green";
            podatak.push(phone);
            telMistake.innerHTML = "";
        }else{
            telefon.style = "border:2px solid red";
            telMistake.innerHTML = "Loš unos broja telefona. Primer: 06X-XXX-XXXX";
        }
    }
    document.getElementById("submit").addEventListener("click", validacija);

    
    //Ispis servisa
    function servis(){
        var nizServisi = [
            {h2:"Neverovatne turističke ture"},
            {h2:"Rezervacija smeštaja"},
            {h2:"Kupovina karata"}
        ];
    
        var ispisServisi = "<div class='container'><div class='service-counter text-center'>";
        for(var i=0; i<nizServisi.length; i++){
            ispisServisi += "<div class='col-md-4 col-sm-4'><div class='single-service-box'><div class='service-img'><img src='assets/images/service/s"+[i+1]+".png' alt='service-icon'/></div> <div class='service-content'><h2>" + nizServisi[i].h2 + "</h2></div></div></div>";
        }
        ispisServisi += "</div></div>";
        return ispisServisi;
    }
    document.getElementById("service").innerHTML = servis();
    
    //Novosti
    function vesti(){
    
        var nizVesti = [
            {h1:"Prag  <span>12 Novembar 2023</span>",
            h3: "Otkrijte istorijska mesta u Pragu",
            p:"Gde god da pogledate, fini primeri gotičkog, baroknog, renesansnog stila su prošarani gradom, pruzajuci sjajan kontrast sa čvrstim starim Praškim zamkom.",
            src:"b1.jpg",
            alt:"Prag"},
            {h1:"Indija  <span>20 Novembar 2023</span>",
            h3:"Neverovatna Indija",
            p:"Jedna od najstarijih civilizacija na svetu, Indija je mozaik multikulturalnih iskustava. Sa bogatom baštinom i bezbrojnim atrakcijama, zemlja je među najpopularnijim turističkim destinacijama na svetu.",
            src:"b2.jpg",
            alt:"Indija"},
            {h1:"Mauricijus  <span>02 Decembar 2023</span>",
            h3:"Mauricijus – približavamo vas prirodi",
            p:"Tirkizne lagune, vulkanski krateri, vlažni delovi suptropske prašume samo su neki od raznih pejazaza mauricijusa na kojima zavide zemlje nekoliko puta veće od veličine od Mauricijusa.",
            src:"b3.jpg",
            alt:"Mauricijus"}
        ];
    
        var vestiIspis = "";
        for(var i=0; i<nizVesti.length; i++){
            vestiIspis += "<div class='col-sm-4 col-md-4'><div class='thumbnail'><h2>" + nizVesti[i].h1 + "</h2><div class='thumbnail-img'><img src='assets/images/blog/" + nizVesti[i].src + "' alt='" +nizVesti[i].alt + "'><div class='thumbnail-img-overlay'></div></div><div class='caption'><div class='blog-txt'><h3>" + nizVesti[i].h3 + "</h3><p>" +nizVesti[i].p + "</p></div> </div></div></div>";
        }
        return vestiIspis;
    }
    document.getElementById("vesti").innerHTML = vesti();
    
    //Galerija
    function gallary(){
        var nizGalerija = [
            {src:"g1.jpg", alt:"Kina", tekst:"Kina"},
            {src:"g2.jpg", alt:"Holandija", tekst:"Holandija"},
            {src:"g3.jpg", alt:"Brazil", tekst:"Brazil"},
            {src:"g4.jpg", alt:"Australija", tekst:"Australija"},
            {src:"g5.jpg", alt:"Turska", tekst:"Turska"},
            {src:"g6.jpg", alt:"Rusija", tekst:"Rusija"}
        ];
        var ispisGalerija = "";
        for(var i=0; i<nizGalerija.length; i++){
            ispisGalerija += "<div class='col-md-6'><div class='filtr-item'><img src='assets/images/gallary/" + nizGalerija[i].src + "'/><div class='item-title title-shadow'><a>" + nizGalerija[i].tekst + "</a></div></div></div>";
        }
        return ispisGalerija;
    }
    document.getElementById("galerija").innerHTML = gallary();
    
    
    //Ispis aranžmana
    function aranzmani(){
        var nizAranzmani = [{
            src: "p1.jpg",
            alt: "Rim",
            tekst: "Rim",
            cena: "200",
            dan: "6",
            noc: "5",
            osobe: "2",
            recenzije: "1265"},
            {
            src: "p2.jpg",
            alt: "London",
            tekst: "London",
            cena: "250",
            dan: "5",
            noc: "4",
            osobe: "2",
            recenzije: "1655"},
            {
            src: "p3.jpg",
            tekst: "Madrid",
            alt: "Madrid",
            cena: "350",
            dan: "7",
            noc: "6",
            osobe: "3",
            recenzije: "1962"},
        ];
    
        var ispisAranzmani = "";
        for(var i=0; i<nizAranzmani.length; i++){
            ispisAranzmani += "<div class='pack-block col-md-4 col-sm-6'><div class='single-package-item'><img src='assets/images/packages/" + nizAranzmani[i].src + "'><div class='single-package-item-txt'><h3>" + nizAranzmani[i].tekst + " <span class='pull-right'>" + nizAranzmani[i].cena + "€</span></h3><div class='packages-para'><p><span><i class='fa fa-angle-right'></i> " + nizAranzmani[i].dan + " dana </br><i class='fa fa-angle-right'></i> " + nizAranzmani[i].noc + " noći </br><i class='fa fa-angle-right'></i> " + nizAranzmani[i].osobe + " osobe</span></p></div><div class='packages-review'><p>" + nizAranzmani[i].recenzije + " recenzija</p></div><div class='about-btn'><a href='#rez'><button class='about-view packages-btn'>rezerviši</button></a></div></div></div></div>";
        }
        return ispisAranzmani;
    }
    document.getElementById("packs-print").innerHTML = aranzmani();
    
    function aranzmaniVise(){
        var nizAranzmani = [{
            src:"p4.jpg",
            alt: "Beč",
            tekst:"Beč",
            cena: "250",
            dan: "7",
            noc: "6",
            osobe: "3",
            recenzije: "1244"},
            {
            src:"p5.jpg",
            tekst:"Pariz",
            alt: "Pariz",
            cena: "400",
            dan: "6",
            noc: "5",
            osobe: "4",
            recenzije: "2456"},
            {
            src:"p6.jpg",
            tekst:"Barselona",
            alt: "Barselona",
            cena: "350",
            dan: "7",
            noc: "6",
            osobe: "3",
            recenzije: "2181"},
        ];
    
        var ispisAranzmani = "";
        for(var i=0; i<nizAranzmani.length; i++){
            ispisAranzmani += "<div class='pack-block col-md-4 col-sm-6'><div class='single-package-item'><img src='assets/images/packages/" + nizAranzmani[i].src + "'><div class='single-package-item-txt'><h3>" + nizAranzmani[i].tekst + " <span class='pull-right'>" + nizAranzmani[i].cena + "€</span></h3><div class='packages-para'><p><span><i class='fa fa-angle-right'></i> " + nizAranzmani[i].dan + " dana </br><i class='fa fa-angle-right'></i> " + nizAranzmani[i].noc + " noći </br><i class='fa fa-angle-right'></i> " + nizAranzmani[i].osobe + " osobe</span></p></div><div class='packages-review'><p>" + nizAranzmani[i].recenzije + " recenzije</p></div><div class='about-btn'><a href='#rez'><button class='about-view packages-btn'>rezerviši</button></a></div></div></div></div>";
        }
        return ispisAranzmani;
    }
    document.getElementById("packs-print-more").innerHTML = aranzmaniVise();
    
    
    //Subscribe
    document.getElementById("subscribe-btn").addEventListener("click", function(){
        var subInput = document.getElementById("subscribe");
        var subValue = subInput.value;
        var reSub = /^[^\s]+@gmail\.com$/;
    
        if(reSub.test(subValue)){
            subInput.style = "border: 2px solid green";
            $('form').submit(function() {
                return true;
            });
            email1Mistake.innerHTML = "";
        }else{
            subInput.style = "border: 2px solid red";
            $('form').submit(function() {
                return false;
            });
            email1Mistake.innerHTML = "Loš unos mejla. Primer: milos@gmail.com";
        }
    });
    

    //tajmer
    var spo = document.getElementById("popust");
    var nazivSpo = ["Grčka", "Malezija", "Hong Kong"];
    var zvezdiceSpo = [5, 5, 5];
    var brojDanaSpo = [12, 15, 10];
    var brojNociSpo = [11, 14, 9];
    var brojOsobaSpo = [2, 2, 4];
    var transportSpo = [1, 1, 1];
    var hranaSpo = [1, 1, 1];
    var opisSpo = [
        "Uprkos tome što se bori sa prenaseljenošću, Santorini ostaje nezaobilazna poseta: sa svojim belim kućama smeštenim na liticama koje gledaju na more, to je upravo ono što zamišljate kada pomislite na Grčku. Vidite to pre nego što to postane još teže",
        "Batu pećine u Kuala Lumpuru ne sadrže samo niz fascinantnih pećina, već i jedan vekovni hinduistički hram. Do hrama se dolazi preko raznobojnih stepenica duginih boja, koje su popularne turističke atrakcije",
        "Više nego što je praktičan, most Hong Kong-Zuhai-Makao izaziva strahopoštovanje za lično svedočenje. Sa 34 milje, to je najduži most na svetu koji se prostire preko mora",
    ];
    var popustSpo = [40, 50, 60];
    var cenaSpo = [930, 1490, 944];
    var regCenaSpo = [1550, 2980, 2360];
    var trajanjePonude = ["Dec 19 2023 00:00", "Dec 30 2023 00:00", "Jan 10 2024 00:00"];
    var baner = document.getElementById("popust");
    function pozadinaSpo0() {
        baner.style.backgroundImage = "url('assets/images/offer/o0.jpg')";
        baner.style.backgroundRepeat = "no-repeat";
        baner.style.backgroundPosition = "center";
    }
    function pozadinaSpo1() {
        baner.style.backgroundImage = "url('assets/images/offer/o1.jpg')";
        baner.style.backgroundRepeat = "no-repeat";
        baner.style.backgroundPosition = "center";
    }
    function pozadinaSpo2() {
        baner.style.backgroundImage = "url('assets/images/offer/o2.jpg')";
        baner.style.backgroundRepeat = "no-repeat";
        baner.style.backgroundPosition = "center";
    }
    pozadinaSpo0();
    function specOffer() {
        var spo1 = `
        <div class="container">
            <div class="special-offer-content">
                <div class="row">
                    <div class="col-sm-8">
                        <div class="single-special-offer">
                            <div class="single-special-offer-txt">
                                <h2>${nazivSpo[i]}</h2>
                                <div class="packages-review special-offerreview">
                                <p>`;
                                    for (let x = 0; x < zvezdiceSpo[i]; x++) {
                                    spo1 += `<i class="fa fa-star"></i>`;
                                    }
                                    spo1 += `</p>
                                </div>
                                <div class="packages-para special-offer-para">
                                    <p>
                                        <span>
                                            <i class="fa fa-angle-right"></i> ${brojDanaSpo[i]} dana
                                            ${brojNociSpo[i]} noći
                                        </span>
                                        <span>
                                            <i class="fa fa-angle-right"></i> ${brojOsobaSpo[i]}
                                            osobe
                                        </span>
                                        <span>
                                            <i class="fa fa-angle-right"></i> ${zvezdiceSpo[i]} zvezdica
                                        </span>
                                    </p>
                                <p>`;
                                if (transportSpo) {
                                    spo1 += `<span>
                                    <i class="fa fa-angleright"></i> Prevoz
                                    </span>`;
                                }
                                if (hranaSpo) {
                                spo1 += `<span>
                                <i class="fa fa-angleright"></i> Hrana
                                </span>`;
                                }
                                spo1 += `</p>
                                <p class="offer-para">
                                ${opisSpo[i]}
                                </p>
                                </div><!--/.packages-para-->
                                <div class="offer-btn-group"></div><!--/.offer-btn-group-->
                            </div><!--/.single-special-offer-txt-->
                        </div><!--/.single-special-offer-->
                    </div><!--/.col-->
                    <div class="col-sm-4">
                        <div class="single-special-offer">
                            <div class="single-special-offer-bg">
                                <img src="assets/images/offer/offer-shape.png" alt="offershape">
                            </div><!--/.single-special-offer-bg-->
                            <div class="single-special-shape-txt">
                                <h4><span>${popustSpo[i]}%</span><br>Popust</h4>
                                <p><span>€ ${cenaSpo[i]}</span><br>Regularna cena
                                €${regCenaSpo[i]}</p>
                            </div><!--/.single-special-shape-txt-->
                            </div><!--/.single-special-offer-->
                    </div><!--/.col-->
                </div><!--/.row-->
            </div><!--/.special-offer-content-->
        </div><!--/.container-->`;
        spo.innerHTML = spo1;
    }
    var i = 0;
    specOffer();
    function makeTimer() {
        var endTime = new Date(trajanjePonude[i]);
        var endTime1 = Date.parse(endTime) / 1000;
        var now = new Date();
        var now1 = Date.parse(now) / 1000;
        var timeLeft = endTime1 - now1;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - days * 86400) / 3600);
        var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
        var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }
        $("#days").html(days + '<span class="camp">Dani</span>');
        $("#hours").html(hours + '<span class="camp">Sati</span>');
        $("#minutes").html(minutes + '<span class="camp">Minuti</span>');
        $("#seconds").html(seconds + '<span class="camp">Sekunde</span>');
        if (timeLeft < 0) {
            if (i == nazivSpo.length) {
                i = 0;
            }else {
                i++;
            }
            switch (i) {
                case 0:
                pozadinaSpo0();
                break;
                case 1:
                pozadinaSpo1();
                break;
                case 2:
                pozadinaSpo2();
                break;
            }
            specOffer();
            makeTimer();
        }
    }
    setInterval(function () {
        makeTimer();
    }, 1000);


    $(document).ready(function(){
        $("#show-more").click(function(){
        $("#packs-print-more").slideToggle('slow');
        });
    })
}
