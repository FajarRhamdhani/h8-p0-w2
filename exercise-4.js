var tanggal       = "30" ;
var bulan         = "1" ;
var tahun         = "1945" ;


switch(bulan) {
    case "1":
        bulan = "Januari";
        break;
    case "2":
        bulan = "Februari";
        break;
    case "3":
        bulan = "Maret";
        break;
    case "4":
        bulan = "April";
        break;
    case "5":
        bulan = "Mei";
        break;
    case "6":
        bulan = "Juni";
        break;
    case "7":
        bulan = "Juli";
        break;
    case "8":
        bulan = "Agustus";
        break;
    case "9":
        bulan = "September";
        break;
    case "10":
        bulan = "Oktober";
        break;
    case "11":
        bulan = "November";
        break;
    case "12":
        bulan = "Desember";
        break;
    default:
        bulan = "Masukkan Bulan";
        break;
} 

var formatTanggal = tanggal + " " + bulan + " " + tahun; 
if(tanggal <= "29" && bulan === "Februari" ) {
    console.log(formatTanggal);
}
else if (tanggal <= "31" && bulan === "Januari" || bulan === "Maret" || bulan === "Mei" || bulan === "Juli" || bulan === "Agustus" || bulan=== "Oktober" || bulan === "Desember" )
{
    console.log(formatTanggal);
}
else if (tanggal <= "30" && bulan === "April" || bulan === "Juni" || bulan === "September" || bulan === "November")
{
    console.log(formatTanggal);
}
else
{
    console.log("Cek Kembali Tanggal/Bulan/ Tahun yang dimasukkan");
}


