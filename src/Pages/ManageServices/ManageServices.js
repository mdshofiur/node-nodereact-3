import {useState,useEffect} from 'react';

const ManageServices = () => {
    const [services, setService] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

  const handleDetete = id =>{
     const url = `http://localhost:5000/services/${id}`;
     fetch(url, {
         method: 'DELETE',
     })

     .then(res => res.json())
     .then(data => {
         if(data.deletedCount){
             alert('deleted')
            const remain = services.filter(service => service._id !== id);
            setService(remain)
         }
     })
    }


    return (
        <div>
            <h2>ManageServices</h2>
            {
                services.map(service => <div key={service._id}>
                    <h2>{service.Name}</h2>
                    <h3>{service._id}</h3>
                    <button onClick={()=> handleDetete(service._id)}>delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;