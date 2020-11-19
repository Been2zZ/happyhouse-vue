<template>
  <div>
    <div v-bind="aptlist" id="map" class="map"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.kakao && window.kakao.maps
      ? this.initMap()
      : this.addKakaoMapScript();
  },
  props: {
    aptlist: Array,
  },
  data() {
    return {
      positions: [],
      markers: [],
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
    this.aptlist.forEach((vo) => {
      this.lat = vo.lat;
      this.lng = vo.lng;
      this.positions.push({
        content:
          '<div class ="label"></span><span class="center">' +
          vo.houseName +
          '</span></div>',
        latlng: new kakao.maps.LatLng(this.lat, this.lng),
      });
      var moveLatLon = new kakao.maps.LatLng(this.lat, this.lng);
      this.map.panTo(moveLatLon);

      var imageSrc =
        'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

      // 마커 사이즈
      var imageSize = new kakao.maps.Size(24, 35);
      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      for (var i = 0; i < this.positions.length; i++) {
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: this.map, // 마커를 표시할 지도
          position: this.positions[i].latlng, // 마커를 표시할 위치
          image: markerImage, // 마커 이미지
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
        kakao.maps.event.addListener(
          marker,
          'mouseout',
          makeOutListener(infowindow)
        );
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
        'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=1f2b05b74809adf220a85901b33cd3da';
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
