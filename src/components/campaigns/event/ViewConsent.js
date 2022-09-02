import React from 'react';
import ConsentMgrListContainerHeader from '../header/ConsentMgrListContainerHeader';
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


const ViewConsent = () => {
    return (
        <>
            <ConsentMgrListContainerHeader />
            <CRow>
                <CCol xs={12}>
                    <CCard className="mb-4">
                        <CCardHeader>
                            <strong>View  Consent List</strong>
                        </CCardHeader>
                        <CCardBody>
                            <CForm className='input-group mb-3'>
                                <CInputGroup>
                                    <CFormInput
                                        placeholder="Campaign Name"
                                        aria-label="Recipient's username with two button addons"
                                        className='input-group mb-3'
                                    />
                                </CInputGroup>

                                <CFormInput
                                    type='number'
                                    placeholder=" Phone number"
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                    className='input-group mb-3'
                                />
                                <CInputGroup>
                                    <CFormInput
                                        placeholder="Channel"
                                        aria-label="Recipient's username with two button addons"
                                        className='input-group mb-3'
                                    />
                                </CInputGroup>
                                <CInputGroup>
                                    <CFormInput
                                        placeholder="Consent"
                                        aria-label="Recipient's username with two button addons"
                                        className='input-group mb-3'
                                    />
                                </CInputGroup>
                                <div className='input-group mb-3'>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div data-coreui-locale="en-US" data-coreui-timepicker="true" data-coreui-toggle="date-picker">Create data</div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div data-coreui-date="2023/03/15 02:22:13 PM" data-coreui-locale="en-US" data-coreui-timepicker="true" data-coreui-toggle="date-picker">Last mofified data</div>
                                        </div>
                                    </div>
                                </div>
                                <CDropdown>
                                    <CDropdownToggle color="primary">Consent</CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem>true</CDropdownItem>
                                        <CDropdownItem>false</CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
            <div></div>

        </>
    );
};

export default ViewConsent;