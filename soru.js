function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

 let sorular = [
    new Soru("1-2018 Dünya Kupası'nı hangi ülke kazanmıştır?", { a:"Arjantin" , b: "Brezilya", c: "Almanya" , d: "Fransa" }, "d"),
    new Soru("2-2010/2011 Türkiye Süper Ligi şampiyonu hangi takımdır?", { a: "Fenerbahçe", b: "Galatasaray", c: "Beşiktaş", d: "Trabzonspor" }, "a"),
    new Soru("3-Hangi futbolcu hem Fenerbahçe hem de Galatasaray futbol takımında forma giymemiştir?", { a: "Emre Belözoğlu", b: "Burak Yılmaz", c: "Tuncay Şanlı", d: "Caner Erkin" }, "c"),
    new Soru("4-Bir maçta 5 gol atmayı başarabilen Fenerbahçe futbolcusu kimdir?", { a: "Alex De Souza", b: "Enner Valencia", c: "Robin Van Persie", d: "Moussa Sow" }, "a"),
    new Soru("5- UEFA Şampiyonlar ligini en çok kazanan takım hangisidir?", { a: "Barcelona", b: "Real Madrid", c: "Milan", d: "Liverpool" }, "b")
];