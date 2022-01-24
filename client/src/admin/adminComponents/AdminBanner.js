import React,{useState,useContext} from 'react'
import { Store } from '../../context/store';


function AdminBanner() {
    let store = useContext(Store)
    let [note, setNote] = store.data;

    return (
        <>
            <section className="adminBannerContains">

                <div className="adminBanner01">
                    <h5>
                      {note}
</h5>
                </div>
            </section>
          
            </>
    )
} export default AdminBanner;