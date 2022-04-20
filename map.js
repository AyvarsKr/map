function init() {
    let map = new ymaps.Map('map-test', {
        center: [55.778624056938995, 37.672640493805034],
        zoom: 15
    });

    let placemark = new ymaps.Placemark([55.778624056938995, 37.672640493805034], {
		balloonContentHeader: '<img width="25" src="https://boek.pro/image/cache/catalog/boek_mini_color-100x100.png">Boek.pro',
		balloonContentBody: 'Спартаковский переулок дом 2, строение 1',
		balloonContentFooter: 'Офис и пункт самовывоза',
        hideIconOnBalloonOpen: false,
        balloonOffset: [3, -40]
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'https://boek.pro/image/cache/catalog/boek_mini_color-100x100.png',
		iconImageSize: [40, 40],
		iconImageOffset: [-19, -44]
	});


    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('searchControl');
    map.geoObjects.add(placemark);

	placemark.balloon.open();
    
}

ymaps.ready(init);


