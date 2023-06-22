import React, { useRef, useState } from "react";
import './modal.scss';
import StoreContext from "../../StoreContext";
import { addItemActionCreator } from "../../Redux/products_reducer";
import { postData } from "../../asyncFunctions/asyncActions";


const ModalWindow = (props)=>{
    const pname = useRef();
    const pcount = useRef();
    const ph = useRef();
    const pwidth = useRef();
    const pweight = useRef();
    const refs = [pname, pcount, ph, pweight, pwidth];
    const link = "https://bioritmefestival.org/wp-content/uploads/2017/11/img-test-300x300.png";

   
    

    return(
        <StoreContext.Consumer>
            {
                (store)=>{
                    let state = store.getState();
                    switch(props.mode){
                        case 'Add':
                            return(
                                <div className={props.active? "modal-window active" : "modal-window"} onClick={()=>props.setActive(false)}>
                                    <div className="modal-content" onClick={(e)=> e.stopPropagation()}>
                                        <h3 className="mb-4">Add a product</h3>
                                        <div className="product-inputs d-flex flex-column gap-3">
                                            <div className="input-item d-flex gap-2 align-center">
                                                <label htmlFor="name">Product Name:</label>
                                                <input ref={pname} required id="name" type="text" />
                                            </div>
                                            <div className="input-item d-flex gap-2 align-center">
                                                <label htmlFor="count">Product count:</label>
                                                <input ref={pcount} required id="count" type="number" />
                                            </div>
                                            <div className="input-item d-flex gap-2 align-center">
                                                <label htmlFor="height">Product height:</label>
                                                <input ref={ph} required id="height" type="number" />
                                            </div>
                                            <div className="input-item d-flex gap-2 align-center">
                                                <label htmlFor="width">Product width:</label>
                                                <input ref={pwidth} required id="width" type="number" />
                                            </div>
                                            <div className="input-item d-flex gap-2 align-center">
                                                <label htmlFor="weight">Product weight:</label>
                                                <input ref={pweight} required id="weight" type="number" />
                                            </div>
                                            <div className="controls d-flex gap-4">
                                                <button className="btn-confirm" onClick={()=>{
                                                    let obj = {
                                                        imageUrl: link,
                                                        name: pname.current.value,
                                                        count: pcount.current.value,
                                                        size:{
                                                            width: pwidth.current.value,
                                                            height: ph.current.value
                                                        },
                                                        Weight: pweight.current.value
                                                    }
                                                    postData(obj);
                                                
                                                    store.dispatch(addItemActionCreator(obj));
                                                    refs.forEach(ref => ref.current.value = '');
                                                    props.setActive(false);
                                                }}>Confirm</button>
                                                <button className="btn-cancel" onClick={()=>{
                                                    props.setActive(false);
                                              
                                                }}>Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        case 'Delete':
                            return(
                                <div className={props.active? "modal-window active" : "modal-window"} onClick={()=>props.setActive(false)}>
                                    <div className="modal-content" onClick={(e)=> e.stopPropagation()}>
                                        <h3>Delete a product</h3>
                                    </div>
                                </div>
                            );
                        default:
                            return;
                    }

                }
            }
        </StoreContext.Consumer>
    );
    // switch(props.mode){
    //     case 'Add':
    //         return(
    //             <div className={props.active? "modal-window active" : "modal-window"} onClick={()=>props.setActive(false)}>
    //                 <div className="modal-content" onClick={(e)=> e.stopPropagation()}>
    //                     <h3 className="mb-4">Add a product</h3>
    //                     <div className="product-inputs d-flex flex-column gap-3">
    //                         <div className="input-item d-flex gap-2 align-center">
    //                             <label htmlFor="name">Product Name:</label>
    //                             <input required id="name" type="text" />
    //                         </div>
    //                         <div className="input-item d-flex gap-2 align-center">
    //                             <label htmlFor="count">Product count:</label>
    //                             <input required id="count" type="number" />
    //                         </div>
    //                         <div className="input-item d-flex gap-2 align-center">
    //                             <label htmlFor="height">Product height:</label>
    //                             <input required id="height" type="number" />
    //                         </div>
    //                         <div className="input-item d-flex gap-2 align-center">
    //                             <label htmlFor="width">Product width:</label>
    //                             <input required id="width" type="number" />
    //                         </div>
    //                         <div className="input-item d-flex gap-2 align-center">
    //                             <label htmlFor="weight">Product weight:</label>
    //                             <input required id="weight" type="number" />
    //                         </div>
    //                         <div className="controls d-flex gap-4">
    //                             <button className="btn-confirm">Confirm</button>
    //                             <button className="btn-cancel" onClick={()=>{
    //                                 props.setActive(false);
                              
    //                             }}>Cancel</button>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         );
    //     case 'Delete':
    //         return(
    //             <div className={props.active? "modal-window active" : "modal-window"} onClick={()=>props.setActive(false)}>
    //                 <div className="modal-content" onClick={(e)=> e.stopPropagation()}>
    //                     <h3>Delete a product</h3>
    //                 </div>
    //             </div>
    //         );
    //     default:
    //         return;
    // }

    
   
}

export default ModalWindow;