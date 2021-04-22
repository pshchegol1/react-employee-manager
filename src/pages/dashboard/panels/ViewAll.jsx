import React, {useEffect, useState}  from "react";
import styled from "styled-components";
import firebaseApp from '../../../firebase/firebaseConfig';
 

import AddEmployeeWidget from "./widgets/AddEmployeeWidget";
import EmployeeDisplayWidget from "./widgets/EmployeeDisplayWidget";

const ViewAllPanelStyles = styled.section`
  padding: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  aside {
    width: 480px;
  }
`;

const ViewAll = (props) => {

  const [employees, setEmployees] = useState([])

  useEffect(()=>{
    fetchEmployees()
  },[])


  const fetchEmployees = async() =>{
    const user = firebaseApp.auth().currentUser.uid
    let docStore =[];
    const ref = firebaseApp.firestore().collection(user).doc('hr').collection('employees')

    ref.onSnapshot(snapshot => {
        docStore = snapshot.docs.map(doc => doc.data())
        setEmployees(docStore)
        
    })
  }

  return (
    <section>
      <ViewAllPanelStyles>
        <AddEmployeeWidget />
        <EmployeeDisplayWidget employees={employees}/>
      </ViewAllPanelStyles>
    </section>
  );
};

export default ViewAll;
