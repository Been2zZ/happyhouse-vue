<template>
  <div>
    <div v-bind="hospitalList" id="map" class="map"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.kakao && window.kakao.maps ? this.initMap() : this.addKakaoMapScript();
  },
  props: {
    hospitalList: Array,
  },
  data() {
    return {
      positions: [],
      markers: [],
      type: [],
      lat: '',
      lng: '',
      map: '',
    };
  },
  updated() {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
    this.positions = [];
    this.type = [];
    this.hospitalList.forEach((vo) => {
      this.lat = vo.lat;
      this.lng = vo.lng;
      this.type.push(vo.type);
      this.positions.push({
        content:
          '<div style="padding:5px;text-align:center;width:150px"><span class="center">' +
          vo.name +
          '</span></div>',
        latlng: new kakao.maps.LatLng(this.lat, this.lng),
      });

      var moveLatLon = new kakao.maps.LatLng(this.lat, this.lng);
      this.map.panTo(moveLatLon);

      var imageSrc = require('@/assets/hospital_pin.png');
      var clinicSrc = require('@/assets/clinic_pin.png');
      // 마커 사이즈
      var imageSize = new kakao.maps.Size(32, 32);
      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      var clinicImage = new kakao.maps.MarkerImage(clinicSrc, imageSize);

      for (var i = 0; i < this.positions.length; i++) {
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: this.map, // 마커를 표시할 지도
          position: this.positions[i].latlng, // 마커를 표시할 위치
          image: this.type[i] == 0 ? markerImage : clinicImage, // 마커 이미지
        });

        var infowindow = new kakao.maps.InfoWindow({
          content: this.positions[i].content,
        });

        this.markers.push(marker);
        // 마커에 마우스오버 이벤트를 등록합니다
        kakao.maps.event.addListener(
          marker,
          'mouseover',
          makeOverListener(this.map, marker, infowindow)
        );
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
      }
      // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
      function makeOverListener(map, marker, infowindow) {
        return function() {
          infowindow.open(map, marker);
        };
      }

      // 인포윈도우를 닫는 클로저를 만드는 함수입니다
      function makeOutListener(infowindow) {
        return function() {
          infowindow.close();
        };
      }
    });
  },

  methods: {
    addKakaoMapScript() {
      const script = document.createElement('script');
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=ac0b09721dfd34b5cfccb576bce5f8ee';
      document.head.appendChild(script);
    },
    initMap() {
      var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
      var options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 6, //지도의 레벨(확대, 축소 정도)
      };

      this.map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
      var moveLatLon = new kakao.maps.LatLng(37.55, 126.97);
      this.map.setCenter(moveLatLon);
    },
  },
};
</script>

<style>
.map {
  width: 100%;
  height: 500px;
}
</style>
