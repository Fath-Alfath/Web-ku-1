var jmlAngkot=10;
var angkotAktif=6;

for(var noAngkot=1; noAngkot <= angkotAktif; noAngkot++){

  if(noAngkot <= angkotAktif ){
    console.log('Angkot No. ' + noAngkot + ' Beroperasi Dengan baik')
  }
  else if(jmlAngkot >=angkotAktif + 1){
    console.log('Angkot No ' + angkotAktif + ' Sedang tidak beroperasi')
  }
  else{
    console.log('Angkot No. ' + noAngkot + ' Harus Lembur')
  }
}

