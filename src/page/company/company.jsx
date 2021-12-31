import React from 'react'
import "./company.css"
import Gallery from '../../components/carousel/Gallery.js'
export default function Company() {
    return (
        <div className="company">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h2 className="companyPride">Trusted by 5,000+ Companies Worldwide</h2>
                </div>
                <div className="col-12">
                    <Gallery className=""/>
                </div>
            </div>
        </div>
    )
}
