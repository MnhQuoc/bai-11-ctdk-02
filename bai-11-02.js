function tinhthue() {
    let thuthap = +document.getElementById("thunhap").value
    var bacthue;
    var tienthue;
    if (thuthap < 0) {
        document.getElementById("result").innerHTML =  "Thu nhập không thể nhỏ hơn 0" ;
    }
        else if (thuthap<=5) {
            bacthue = 1;
            tienthue = thuthap*5/100;
        }
            else if (thuthap<=10) {
                bacthue = 2;
                tienthue = thuthap*10/100;
            }
                else if (thuthap<=18) {
                    bacthue = 3;
                    tienthue = thuthap*15/100;
                }
                    else if (thuthap<=32) {
                        bacthue = 4;
                        tienthue = thuthap*20/100;
                    }
                        else if (thuthap<=52) {
                            bacthue = 5;
                            tienthue = thuthap*25/100;
                        }
                            else if (thuthap<=80) {
                                bacthue = 6;
                                tienthue = thuthap*30/100;
                            }
                                else {
                                    bacthue = 7;
                                    tienthue = thuthap*35/100
                                }
    document.getElementById("result").innerHTML =  "Tiền thuế: " + tienthue + " triệu đồng" ;
    document.getElementById("bacthue").innerHTML =  "Bậc thuế: Bậc " + bacthue ;
    if (thuthap < 0) {
        document.getElementById("result").innerHTML =  "Thu nhập không thể nhỏ hơn 0" ;
        document.getElementById("bacthue").innerHTML =  "Không có thu nhập" ;
    }
}