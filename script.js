function konversiCelcius() {
    const angka = document.getElementById("input-celcius").value;
    const hasil = (parseFloat(angka) * 9 / 5) + 32;
    if (angka === "") {
      alert("Masukkan suhu dalam Celcius terlebih dahulu.");
      
    }else{
        document.getElementById("fahrenheit").value = hasil.toFixed(2);
        document.getElementById("kalkulasi").value = `(${angka} × 9/5) + 32 = ${hasil.toFixed(2)} °F`;
    }
  
    
  }
  
  function resetForm() {
    document.getElementById("input-celcius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("kalkulasi").value = "";
  }
  
  function reverseSuhu() {
    const fahrenheit = document.getElementById("fahrenheit").value;
    const hasil = (parseFloat(fahrenheit) - 32) * 5 / 9;
    if (fahrenheit === "") {
      alert("Masukkan suhu Fahrenheit untuk dikonversi ke Celcius.");
    }else{
    document.getElementById("input-celcius").value = hasil.toFixed(2);
    document.getElementById("kalkulasi").value = `(${fahrenheit} - 32) × 5/9 = ${hasil.toFixed(2)} °C`;
    }
    
  }
  