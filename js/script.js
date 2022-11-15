var $hamIcon = document.querySelector("header .mypage li:nth-child(4)");  //클릭할 대상
var $menu = document.querySelector("header .menu");  //변경돌 대상

$hamIcon.addEventListener("click", function(e){
    e.preventDefault();
    var activeMenu = $menu.classList.contains("active");
    if(!activeMenu){
        $menu.classList.add("active");
    }else{
        $menu.classList.remove("active");
    }
})


$(document).ready(function(){
    /* new_arrivals */
    var $new_arrivals = [
        ["new_01_01.jpg", "KING Platinum 21 FG/AG", "Men's Soccer Cleats"],
        ["new_02_01.jpg", "FUSE", "Training Shoes"],
        ["new_03_01.jpg", "Suede RE.GEN", "Sneakers"],
        ["new_04_01.jpg", "Leadcat", "G Sandals"],
        ["new_05_01.jpg", "COOLADAPT", "Women’s Running Tank Top"],
        ["new_06_01.jpg", "Sonora Waist", "BAG 2.0"],
        ["new_07_01.jpg", "High Court Regal Mid", "Women's Sneakers"],
        ["new_08_01.jpg", "Cali Star Rainbow", "Women's Sneakers"],
        ["new_09_01.jpg", "RS-Z Red", "CAMPUS"],
        ["new_10_01.jpg", "MB.01", "BUZZ CITY"],
    ];
    for(v of $new_arrivals){
        $("#new_arrivals .cont").append(`
        <div class="box" style="background-image:url(../img/products/${v[0]})">
            <div class="dark">
                <h4>${v[1]}</h4>
                <p>${v[2]}</p>
                <a href="#">More</a>
            </div>
        </div> 
        `);
    }


    /* match */
    var $match = [
        ["category_01.jpg", "EVERYDAY", "BEST FOR : A RUN HERE AND THERE."],
        ["category_02.jpg", "COMPETITIVE", "BEST FOR : CHASING THE NEXT RACE."],
        ["category_03.jpg", "LONG DISTANCE", "BEST FOR : RACKING UP THE MILES."],
    ];
    for(v of $match){
        $(".match .cont").append(`
        <div class="box">
            <div class="imgPart" style="background-image:url(../img/${v[0]})"></div>

            <div class="txtPart">
                <h4>${v[1]}</h4>
                <p>${v[2]}</p>
                <a href="#">Shop Now</a>
            </div>
        </div>
        `);
    }
});



    /* match */
    var $new_year = [
        ["collection_01.jpg", "SOFT ON ANOTHER LEVEL", "CLOUDSPUN"],
        ["collection_02.jpg", "ESCAPE FROM ROUTINE", "PUMA x HELLY HANSEN"],
        ["collection_03.jpg", "EMPOWERED PEOPLE. CLEANER PLANET.", "PUMA x FIRST MILE"],
    ];
    for(v of $new_year){
        $(".new_year .cont").append(`
        <div class="box">
            <div class="imgPart" style="background-image:url(../img/${v[0]})"></div>

            <div class="txtPart">
                <h4>${v[1]}</h4>
                <p>${v[2]}</p>
                <a href="#">Shop Now</a>
            </div>
        </div>
        `);
    }