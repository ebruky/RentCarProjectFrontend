--->Anasayfada ilk olarak bu şekilde araç listesi geliyor.
![Adsız](https://user-images.githubusercontent.com/41199747/114317520-22787100-9b11-11eb-97e6-61352d4ed0ce.png)

--->Herhangi bir marka seçildiğinde seçilen markaya göre listeleme işlemi yapılıyor.
![Adsız](https://user-images.githubusercontent.com/41199747/114317635-a6caf400-9b11-11eb-8c8f-a0dfb121f4d7.png)

--->Herhangi bir renk seçildiğinde seçilen renge göre listeleme işlemi yapılıyor.
![Adsız](https://user-images.githubusercontent.com/41199747/114317674-ec87bc80-9b11-11eb-86d7-b031abade2f3.png)

--->Herhangi bir aracın detay butonuna basılınca o araca ait detay sayfasına yönlendiriliyor ve resimleri görüntüleniyor.
![Adsız](https://user-images.githubusercontent.com/41199747/114317788-746dc680-9b12-11eb-91aa-aa6783873887.png)
![Adsız](https://user-images.githubusercontent.com/41199747/114317840-be56ac80-9b12-11eb-897f-fbde8d1440ff.png)

--->Araca ait resim yoksa anasayfada görüldüğü üzere default resmi ile görüntülenecektir.
![Adsız](https://user-images.githubusercontent.com/41199747/114320543-f4019280-9b1e-11eb-8c5b-f34e9fb287ab.png)


--->Hem renk hem marka seçilerek çoklu filtreleme işlemi gerçekleştiriliyor.
![Adsız](https://user-images.githubusercontent.com/41199747/114317936-2c02d880-9b13-11eb-8cb5-50f1afbf1426.png)
![Adsız](https://user-images.githubusercontent.com/41199747/114317969-52c10f00-9b13-11eb-979f-ea0303401b0e.png)

--->Aracın isminde içerisinde aratılan harfler mevcutsa araç ismine göre listeleme işlemi yapılıyor.
![Adsız](https://user-images.githubusercontent.com/41199747/114318099-1a6e0080-9b14-11eb-81c5-dd6fa4773af1.png)

--->Marka isminde  aratılan harfler mevcutsa marka ismine göre listeleme işlemi yapılıyor.
![Adsız](https://user-images.githubusercontent.com/41199747/114318162-6de04e80-9b14-11eb-81fc-e8e9b9ac0f7e.png)

--->Renk isminde  aratılan harfler mevcutsa renk ismine göre listeleme işlemi yapılıyor.

![Adsız](https://user-images.githubusercontent.com/41199747/114318200-a849eb80-9b14-11eb-9dc0-22bae4124295.png)

--->Araç detayına tıklayınca araba eğer kiralanmış ise aşağıdaki gibi "Araç Kirada" olarak görünür.
![Adsız](https://user-images.githubusercontent.com/41199747/114318431-8c931500-9b15-11eb-9bbd-ad7c656d4076.png)

--->Araç kirada değil ise kiralamak için tarih ve müşteri seçimi yapılabilen bir arayüz karşımıza çıkar.
![Adsız](https://user-images.githubusercontent.com/41199747/114318510-f9a6aa80-9b15-11eb-8d46-b552eee94c04.png)

--->Forma, müşteriler veritabanından çekiliyor ve istenilen müşteri seçiliyor. Seçilen tarihlerin gün olarak farkı alınıp aracın günlük fiyatı ile çarpılıyor, bu hesaplamadan sonra ödeme sayfasına yönlendiriliyor.
![Adsız](https://user-images.githubusercontent.com/41199747/114318673-cfa1b800-9b16-11eb-9d3d-aaf9bb167c19.png)
![Adsız](https://user-images.githubusercontent.com/41199747/114318902-ba795900-9b17-11eb-9c7a-9519df343b40.png)

---> Ödeme Yap butonuna tıklandığında ödeme işlemi gerçekleşiyor ve araba kiralanmış oluyor.
![Adsız](https://user-images.githubusercontent.com/41199747/114319000-31aeed00-9b18-11eb-8b20-35d385271e4a.png)
![Adsız](https://user-images.githubusercontent.com/41199747/114319040-6d49b700-9b18-11eb-97c0-793fc919b5cc.png)

--->Yeni bir araç ekleme işleminde eğer eksik veri girilirse "Formunuz Eksik" şeklinde hata mesajı ekrana gelir.
![Adsız](https://user-images.githubusercontent.com/41199747/114319221-3cb64d00-9b19-11eb-92f8-ec0ce14d4e1e.png)

--->Backend tarafında araç eklerken bazı kurallar tanımladım. (Günlük fiyat 0'dan büyük olmalı, Model yılı 4 karakterden fazla olmamalı gibi...) Eğer bu kurallara uyulmazsa ekrana hata mesajları veriyor ve ekleme işlemi başarısız oluyor.
![Adsız](https://user-images.githubusercontent.com/41199747/114319317-a0407a80-9b19-11eb-9852-d8230dbe4afe.png)
![Adsız](https://user-images.githubusercontent.com/41199747/114319379-ef86ab00-9b19-11eb-9d87-8172137b1e1f.png)

--->Ekleme formunda eksik veri girilmezse ve girilen veriler kurallara uygun ise ekleme işlemi başarı ile gerçekleşiyor.
![Adsız](https://user-images.githubusercontent.com/41199747/114319477-602dc780-9b1a-11eb-84dc-34c2d04fafd6.png)
![Adsız](https://user-images.githubusercontent.com/41199747/114319501-82274a00-9b1a-11eb-8921-bb9bb6fb3a48.png)

--->Marka Ekleme İşlemi  (Backend tarafında isme göre kural ekledim, girilen isim 2 karakterden küçük ise araç ekleme işleminde olduğu gibi ekrana hata mesajı veriyor ve ekleme işlemi başarısız oluyor.)
![Adsız](https://user-images.githubusercontent.com/41199747/114319564-b13dbb80-9b1a-11eb-9884-7e9f93f22739.png)
![Adsız](https://user-images.githubusercontent.com/41199747/114319593-c9add600-9b1a-11eb-92b4-610ba3caf4cb.png)

--->Renk Ekleme İşlemi(Backend tarafında isme göre kural ekledim, girilen isim 2 karakterden küçük ise araç ekleme işleminde olduğu gibi ekrana hata mesajı veriyor ve ekleme işlemi başarısız oluyor.)
![Adsız](https://user-images.githubusercontent.com/41199747/114319634-f235d000-9b1a-11eb-8282-1ef90886ef83.png)
![Adsız](https://user-images.githubusercontent.com/41199747/114319653-0679cd00-9b1b-11eb-993b-0f3aa8eb8470.png)

--->Araç güncelleme için herhangi bir aracın güncelleme butonuna tıklıyoruz.


![Adsız](https://user-images.githubusercontent.com/41199747/114319975-6f157980-9b1c-11eb-9fce-8433c33d6f1c.png)

--->Güncelleme ekranında aracın mevcut olan bilgileri otomatik olarak geliyor. Güncellemek istediklerimizi değiştirip güncelleme butonuna tıklıyoruz ve aracımız başarı ile güncellenmiş oluyor.
![Adsız](https://user-images.githubusercontent.com/41199747/114320017-9cfabe00-9b1c-11eb-881f-10c1da89e864.png)
![Adsız](https://user-images.githubusercontent.com/41199747/114320088-fa8f0a80-9b1c-11eb-9f57-99ecd910e27a.png)


--->Marka Güncelleme İşlemi
![Adsız](https://user-images.githubusercontent.com/41199747/114320146-31fdb700-9b1d-11eb-9342-63e3adc7093b.png)
![Adsız](https://user-images.githubusercontent.com/41199747/114320169-56f22a00-9b1d-11eb-9c07-90afd461beb0.png)
![Adsız](https://user-images.githubusercontent.com/41199747/114320184-6cffea80-9b1d-11eb-8512-95f1ee250acb.png)


--->Renk Güncelleme İşlemi
![Adsız](https://user-images.githubusercontent.com/41199747/114320224-a89ab480-9b1d-11eb-9337-f1dcba38560b.png)
![Adsız](https://user-images.githubusercontent.com/41199747/114320248-c0723880-9b1d-11eb-88e2-c764a0050843.png)
![Adsız](https://user-images.githubusercontent.com/41199747/114320264-d41d9f00-9b1d-11eb-813e-2dfb410e6c1c.png)



BURAYA KADAR İNCELEDİĞİNİZ İÇİN ÇOK TEŞEKKÜR EDERİM EKSİKLERİM VAR EVET AMA EN KISA ZAMANDA TAMAMLAYACAĞIM.(GÖRÜNTÜ KONUSUNDA DA İYİLEŞTİRME YAPACAĞIM TABİİ Kİ :) )









