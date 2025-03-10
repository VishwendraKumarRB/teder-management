export const defaultUsers = [
  {
    id: 100,
    email: "vishwendra@gmail.com",
    password: "password",
    isAdmin: false,
  },
  {
    id: 1,
    email: "tender_admin@gmail.com",
    password: "adminPassword",
    isAdmin: true,
  },
];

export const defaultTenders = [
  {
    id: 1,
    name: "Test Tender 1",
    description: "Test Description 1",
    startTime: 1741592540000,
    endTime: 1742456540000,
    bufferTime: 1742542940000,
    isLastMinuteBid: false,
    minimumBid: 15000,
    bids: [
      {
        id: 1,
        companyName: "Test company 1",
        bidTime: 1741439651000,
        bidCost: 15000,
      },
      {
        id: 2,
        companyName: "Test company 2",
        bidTime: 1741439651000,
        bidCost: 20000,
      },
    ],
  },
  {
    id: 2,
    name: "Test Tender 2",
    description: "Test Description 2",
    startTime: 1741439641000,
    endTime: 1741526041000,
    bufferTime: "",
    isLastMinuteBid: false,
    minimumBid: 15000,
    bids: [
      {
        id: 1,
        companyName: "Test company 1",
        bidTime: 1741439651000,
        bidCost: 15000,
      },
      {
        id: 2,
        companyName: "Test company 2",
        bidTime: 1741439651000,
        bidCost: 20000,
      },
    ],
  },
  {
    id: 3,
    name: "Test Tender 3",
    description: "Test Description 2",
    startTime: 1741439641000,
    endTime: 1741526041000,
    bufferTime: 1741592540000,
    isLastMinuteBid: true,
    minimumBid: 15000,
    bids: [
      {
        id: 1,
        companyName: "Test company 1",
        bidTime: 1741439651000,
        bidCost: 15000,
      },
      {
        id: 2,
        companyName: "Test company 2",
        bidTime: 1741439651000,
        bidCost: 20000,
      },
      {
        id: 3,
        companyName: "Test company 3",
        bidTime: 1741439651000,
        bidCost: 25000,
      },
      {
        id: 4,
        companyName: "Test company 4",
        bidTime: 1741439651000,
        bidCost: 30000,
      },
    ],
  },
];
