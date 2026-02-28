// Objects are retained in memory while they are reachable

let temp = {
  email: "gibberish@xyz.com",
  time: 5, // mins
};

// After 5 mins
temp = null;

// We can't access the temp object, there are no references to it
// The garbage collector will junk the data and free the memory
