const users = [
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

// Admin Object

// {
//   id: 1,
//   email: 'tender_admin@gmail.com',
//   password: 'adminPassword'
// }

tenders: [
  {
    id: 1,
    name: "Test Tender 1",
    description: "Test Description 1",
    startTime: "",
    endTime: "",
    bufferTime: "",
    isLastMinuteBid: false,
    minimumBid: 15000,
    bids: [
      {
        companyName: "Test Comapny 1",
        bidTime: "",
        bidCost: 15000,
      },
      {
        companyName: "Test Comapny 2",
        bidTime: "",
        bidCost: 20000,
      },
    ],
  },
  {
    id: 2,
    name: "Test Tender 2",
    description: "Test Description 2",
    startTime: "",
    endTime: "",
    bufferTime: "",
    isLastMinuteBid: false,
  },
];

const lastTenderId = 2;

createTender = ({ name, description, startTime, endTime, bufferTime }) => {
  const tenderObject = {
    id: lastTenderid + 1,
    name,
    description,
    startTime,
    endTime,
    bufferTime,
    isLastMinuteBid: false,
  };

  // Update lastTenderId = lastTenderId + 1

  // Push tenderObject in Tenders
};

createUser = ({ email, password }) => {
  const userObject = {
    id: lastUserObject + 1,
    email,
    password,
    isAdmin: false,
  };

  // Push tenderObject in Tenders
  //l
};

placeBid = ({ id, companyName, bidAmount }) => {
  // find
};
