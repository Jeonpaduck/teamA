  var mapContainer = document.getElementById('map'), // 지도를 표시할 div
  mapOption = {
  center: new daum.maps.LatLng(37.2314175,127.18914730000006), // 지도의 중심좌표
  level: 3 // 지도의 확대 레벨
  };
  var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
  // 마커를 표시할 위치입니다
  var position =  new daum.maps.LatLng(37.2251251,127.18717509999999);
  // 마커를 생성합니다
  var marker = new daum.maps.Marker({
    position: position,
    clickable: true // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
  });
  // 아래 코드는 위의 마커를 생성하는 코드에서 clickable: true 와 같이
  // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
  // marker.setClickable(true);
  // 마커를 지도에 표시합니다.
  marker.setMap(map);
  // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
  var iwContent = '<div style="padding:5px;"> 명지대정문</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
  iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
  // 인포윈도우를 생성합니다
  var infowindow = new daum.maps.InfoWindow({
    content : iwContent,
    removable : iwRemoveable
  });
  // 마커에 클릭이벤트를 등록합니다
  daum.maps.event.addListener(marker, 'click', function() {
    // 마커 위에 인포윈도우를 표시합니다
    infowindow.open(map, marker);
    
  });