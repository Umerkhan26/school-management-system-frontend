import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { getTeachers } from "./Services/teacher";
const StudentTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch teachers when the component mounts
    const fetchTeachers = async () => {
      try {
        setLoading(true); // Set loading state to true while fetching data
        const data = await getTeachers(); // Get teachers data from API
        setTeachers(data); // Update state with teachers data
      } catch (error) {
        console.error("Error fetching teachers:", error);
        setError("Failed to fetch teachers. Please try again."); // Display error message to user
      } finally {
        setLoading(false); // Set loading state to false after fetching is done
      }
    };

    fetchTeachers(); // Call the async function to fetch teachers
  }, []); // Empty

  return (
    // <div className="container-fluid">
    //   <div className="row">
    //     <div className="col-md-3">
    //       <Sidebar />
    //     </div>
    //     <div className="col-md-9" style={{ width: "76%" }}>
    //       <div className="content">
    //         <div className="class-content d-flex justify-content-between align-items-center">
    //           <h1 style={{ color: "#000", flex: "1" }}>Teachers</h1>
    //         </div>

    //         <div className="class-list">
    //           <div
    //             className="card"
    //             style={{ border: "none", backgroundColor: "transparent" }}
    //           >
    //             <div
    //               className="card-body"
    //               style={{ padding: "0", overflowX: "hidden" }}
    //             >
    //               <table
    //                 className="table table-striped"
    //                 style={{ width: "100%" }}
    //               >
    //                 <thead>
    //                   <tr>
    //                     <th>Teacher Name</th>
    //                     <th>Email</th>
    //                     <th>Phone</th>
    //                     {/* <th>Class</th> */}
    //                     <th>Gender</th>
    //                     <th>Subject</th>
    //                   </tr>
    //                 </thead>
    //                 <tbody>
    //                   {teachers.map((teacher, index) => (
    //                     <tr key={index}>
    //                       <td>{teacher.teacherName}</td>
    //                       <td>{teacher.teacherEmail}</td>
    //                       <td>{teacher.teacherPhone}</td>
    //                       {/* <td>{teacher.teacherClass}</td> */}
    //                       <td>{teacher.gender}</td>
    //                       <td>{teacher.subject}</td>
    //                     </tr>
    //                   ))}
    //                 </tbody>
    //               </table>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <Container>
      <Row>
        {/* Sidebar */}
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>

        {/* Content */}
        <ContentWrapper>
          <Content>
            <ClassContent>
              <PageTitle>Teachers</PageTitle>
            </ClassContent>

            <ClassList>
              <Card>
                <CardBody>
                  <Table>
                    <thead>
                      <TableRow className="table-header">
                        <TableHeader>Teacher Name</TableHeader>
                        <TableHeader>Email</TableHeader>
                        <TableHeader>Phone</TableHeader>
                        <TableHeader>Gender</TableHeader>
                        <TableHeader>Subject</TableHeader>
                      </TableRow>
                    </thead>
                    <tbody>
                      {teachers.map((teacher, index) => (
                        <TableRow key={index} className="table-row">
                          <TableData>{teacher.teacherName}</TableData>
                          <TableData>{teacher.teacherEmail}</TableData>
                          <TableData>{teacher.teacherPhone}</TableData>
                          <TableData>{teacher.gender}</TableData>
                          <TableData>{teacher.subject}</TableData>
                        </TableRow>
                      ))}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </ClassList>
          </Content>
        </ContentWrapper>
      </Row>
    </Container>
  );
};

export default StudentTeachers;
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const SidebarWrapper = styled.div`
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #343a40;
  color: white;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
  padding-top: 30px;
`;

const ContentWrapper = styled.div`
  margin-left: 270px;
  padding: 20px;
  width: calc(100% - 270px);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ClassContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const ClassList = styled.div`
  margin-top: 30px;
`;

const Card = styled.div`
  background-color: transparent;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const CardBody = styled.div`
  padding: 15px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
`;

const TableHeader = styled.th`
  padding: 12px 15px;
  // background-color: #007bff;
  color: black;
  font-weight: 600;
  text-align: center;
`;

const TableData = styled.td`
  padding: 12px 15px;
  text-align: center;
  font-size: 1rem;
`;
