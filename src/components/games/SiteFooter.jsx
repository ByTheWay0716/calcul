import React from 'react';

const SiteFooter = () => {
    const gameCount = 100; // Example data
    const accountsRequiredCount = 75; // Example data
    const rawDataPercentage = 85; // Example data
    const systemVersion = "1.0.0"; // Example version
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div>
                <p>Game Count: {gameCount}</p>
                <p>Accounts Required: {accountsRequiredCount}</p>
                <p>Raw Data Percentage: {rawDataPercentage}%</p>
            </div>
            <div>
                <p>&copy; {currentYear} ByTheWay0716. All rights reserved.</p>
                <p>System Version: {systemVersion}</p>
            </div>
        </footer>
    );
};

export default SiteFooter;