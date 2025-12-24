import "./EODReport.css";
import { FaPhoneAlt, FaThumbsUp, FaThumbsDown, FaRedo } from "react-icons/fa";

const EODReport = () => {
    return (
        <div className="eod-container">
            {/* HEADER */}
            <div className="eod-header">
                <div>
                    <h1>End of Day Report</h1>
                    <p>Daily performance summary - March 15, 2024</p>
                </div>

                <div className="eod-actions">
                    <button className="btn red">Download PDF</button>
                    <button className="btn green">Export Excel</button>
                    <button className="btn purple">Share with Team Lead</button>
                </div>
            </div>

            {/* SUMMARY CARDS */}
            <div className="summary-grid">
                <div className="card blue">
                    <div>
                        <h4>Total Calls</h4>
                        <h2>1,847</h2>
                        <p>100% of assigned</p>
                    </div>
                    <FaPhoneAlt />
                </div>

                <div className="card green">
                    <div>
                        <h4>Total Positive</h4>
                        <h2>542</h2>
                        <p>29.3% conversion</p>
                    </div>
                    <FaThumbsUp />
                </div>

                <div className="card red">
                    <div>
                        <h4>Total Negative</h4>
                        <h2>823</h2>
                        <p>44.6% rejection</p>
                    </div>
                    <FaThumbsDown />
                </div>

                <div className="card orange">
                    <div>
                        <h4>Total Callback</h4>
                        <h2>482</h2>
                        <p>26.1% follow-up</p>
                    </div>
                    <FaRedo />
                </div>
            </div>

            {/* TABLE */}
            <div className="table-card">
                <h2>Employee-wise Call Breakdown</h2>

                <table className="eod-table">
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Total Calls</th>
                            <th>Positive</th>
                            <th>Negative</th>
                            <th>Callback</th>
                            <th>Not Reachable</th>
                            <th>Conversion Rate</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Rajesh Kumar</td>
                            <td>58</td>
                            <td><span className="pill green">22</span></td>
                            <td><span className="pill red">28</span></td>
                            <td><span className="pill yellow">8</span></td>
                            <td>0</td>
                            <td className="rate">37.9%</td>
                        </tr>

                        <tr>
                            <td>Priya Sharma</td>
                            <td>61</td>
                            <td><span className="pill green">25</span></td>
                            <td><span className="pill red">30</span></td>
                            <td><span className="pill yellow">6</span></td>
                            <td>0</td>
                            <td className="rate">41.0%</td>
                        </tr>

                        <tr>
                            <td>Amit Patel</td>
                            <td>55</td>
                            <td><span className="pill green">18</span></td>
                            <td><span className="pill red">29</span></td>
                            <td><span className="pill yellow">8</span></td>
                            <td>0</td>
                            <td className="rate">32.7%</td>
                        </tr>
                    </tbody>

                    <tfoot>
                        <tr>
                            <th>Total</th>
                            <th>1,847</th>
                            <th className="green-text">542</th>
                            <th className="red-text">823</th>
                            <th className="orange-text">482</th>
                            <th>0</th>
                            <th>29.3%</th>
                        </tr>
                    </tfoot>
                </table>

            </div>
        </div>
    );
};

export default EODReport;
