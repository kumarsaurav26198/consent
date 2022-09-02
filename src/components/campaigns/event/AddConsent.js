import React, { useState } from 'react';
import ConsentMgrListContainerHeader from '../header/ConsentMgrListContainerHeader';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { nanoid } from "@reduxjs/toolkit";


import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDropdown,
    CDropdownDivider,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CFormCheck,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CFormTextarea,
    CInputGroup,
    CInputGroupText,
    CRow,
    CForm,
    CSwitch
} from '@coreui/react';
import { addConsent } from "../../../redux/actions/consentActionCreator";
import { Navigate } from 'react-router';



const AddConsent = () => {
    const navigate = useNavigate();

    const usersAmount = useSelector((state) => state.reducers.consentList);
    const consentLength = usersAmount.length;
    // console.warn("redux store consentLength", consentLength);


    const [campaignName, setCampaignName] = useState("");
    const [number, setNumber] = useState("");
    const [channel, setChannel] = useState("");
    const [consent, setConsent] = useState("");
    const [createdate, setCreatedate] = useState("");
    const [lastdate, setLastdate] = useState("");
    const [error, setError] = useState(null);

    const handleCampaignName = (e) => {
        setCampaignName(e.target.value);
        e.preventDefault();
    };
    const handleNumber = (e) => {
        setNumber(e.target.value);
        e.preventDefault();
    };
    const handleChannel = (e) => {
        setChannel(e.target.value);
        e.preventDefault();
    };
    const handleConsent = (e) => {
        setConsent(e.target.value);
        e.preventDefault();

    };
    const handleCreatedate = (e) => {
        setCreatedate(e.target.value);
        e.preventDefault();

    };
    const handleLastModifiedDate = (e) => {
        setLastdate(e.target.value);
        e.preventDefault();

    };
    const handleClick = (e) => {
        if (
            campaignName && number
        )
        {
            dispatch(
                addConsent({
                    id: consentLength + 1,
                    campaignName,
                    number,
                    channel,
                    consent,
                    createdate,
                    lastdate
                })
            );

            setError(null);
            navigate("/consentMgrListEditContainer");
        } else
        {
            setError("Fill in all fields");
        }

        setNumber("");
        setChannel("");
        setCampaignName("");
        setConsent("");
        setCreatedate("");
        setLastdate("");
        e.preventDefault();

    };
    const dispatch = useDispatch();

    return (
        <>
            <ConsentMgrListContainerHeader />
            <CRow>
                <CCol xs={12}>
                    <CCard className="mb-4">
                        <CCardHeader>
                            <strong>Add Consent</strong>
                        </CCardHeader>
                        <CCardBody>
                            <CForm className='input-group mb-3'>
                                <CInputGroup>
                                    <CFormInput
                                        placeholder="Campaign Name"
                                        aria-label="Recipient's username with two button addons"
                                        className='input-group mb-3'
                                        onChange={handleCampaignName}
                                        value={campaignName}
                                    />
                                </CInputGroup>

                                <CFormInput
                                    type='number'
                                    placeholder=" Phone number"
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                    className='input-group mb-3'
                                    onChange={handleNumber}
                                    value={number}
                                />
                                <CInputGroup>
                                    <CFormInput
                                        placeholder="Channel"
                                        aria-label="Recipient's username with two button addons"
                                        className='input-group mb-3'
                                        onChange={handleChannel}
                                        value={channel}
                                    />
                                </CInputGroup>
                                <CInputGroup>
                                    <CFormInput
                                        placeholder="Consent"
                                        aria-label="Recipient's username with two button addons"
                                        className='input-group mb-3'
                                        onChange={handleConsent}
                                        value={consent}
                                    />
                                </CInputGroup>
                                <CInputGroup className='input-group mb-3'>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div data-coreui-locale="en-US" data-coreui-timepicker="true" data-coreui-toggle="date-picker" onChange={handleCreatedate}
                                                value={createdate}>Create data</div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div data-coreui-date="2023/03/15 02:22:13 PM" data-coreui-locale="en-US" data-coreui-timepicker="true" data-coreui-toggle="date-picker" onChange={handleLastModifiedDate}
                                                value={lastdate}>Last mofified data</div>
                                        </div>
                                    </div>
                                </CInputGroup>
                                <CDropdown className=' pb-3'>
                                    <CDropdownToggle color="primary">Consent</CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem>true</CDropdownItem>
                                        <CDropdownItem>false</CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                                <CInputGroup className='pt-4'>
                                    <CButton onClick={handleClick}>Add New Consent</CButton>
                                    {error && error}
                                    {/* <CButton onClick={() => dispatch(addConsent())}>Add New Consent</CButton> */}
                                </CInputGroup>

                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
            <div></div>

        </>
    );
};

export default AddConsent;