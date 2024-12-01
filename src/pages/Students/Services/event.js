const eventData = [
  {
    id: "1",
    title: "School Annual Day",
    description: "Annual function celebration with various cultural programs.",
    date: "2023-09-15",
    location: "School Auditorium",
  },
  {
    id: "2",
    title: "Parent-Teacher Meeting",
    description:
      "Meeting to discuss student progress and academic performance.",
    date: "2023-09-20",
    location: "Classrooms",
  },
];

export default eventData;

export const getEvents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(eventData); // Return the mock event data after 1 second
    }, 1000); // Simulate 1-second network delay
  });
};
