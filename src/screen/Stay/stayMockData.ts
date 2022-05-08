const stayMockData = {
  title: '408 St. Jacques | Room #208',
  location: 'Old Montreal, Montreal',
  dates: 'Oct.29, 2021 - Oct.31, 2021',
  image: require('./placeholder.jpeg'),
  details: [
    {
      id: 1,
      title: 'Access codes',
      items: [
        {
          id: 1,
          itemLabel: 'building',
          itemDetail: '7853',
        },
        {
          id: 2,
          itemLabel: 'appartment',
          itemDetail: '7863',
        },
      ],
    },
    {
      id: 2,
      title: 'Wifi',
      items: [
        {
          id: 1,
          itemLabel: 'name',
          itemDetail: 'places2stay',
        },
        {
          id: 2,
          itemLabel: 'secret',
          itemDetail: 'funwaytostay',
        },
      ],
    },
  ],
};

export default stayMockData;
