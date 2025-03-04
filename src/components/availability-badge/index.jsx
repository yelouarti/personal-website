import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './style.css';

const AvailabilityBadge = ({ endDateOfCurrentProject }) => {
    const { t, i18n } = useTranslation();

    // Determine badge state based on current date and project end date
    const determineBadgeState = () => {
        // If no end date is provided
        if (!endDateOfCurrentProject) {
            return 'open';
        }

        const now = new Date();
        const endDate = new Date(endDateOfCurrentProject);

        // Calculate available-from date (10 days after project ends)
        const availableFromDate = new Date(endDate);
        availableFromDate.setDate(endDate.getDate() + 10); // Add 10 days to determine the available-from month

        // Calculate time windows
        const oneMonthBeforeEnd = new Date(endDate);
        oneMonthBeforeEnd.setMonth(endDate.getMonth() - 1);

        const twoMonthsBeforeEnd = new Date(endDate);
        twoMonthsBeforeEnd.setMonth(endDate.getMonth() - 2);

        // Get localized month names based on current language
        const getLocalizedMonth = (date) => {
            // Use the current language from i18n
            return date.toLocaleString(i18n.language, { month: 'long' });
        };

        // Determine badge state
        if (now >= oneMonthBeforeEnd) {
            return 'open';
        } else if (now >= twoMonthsBeforeEnd) {
            return {
                type: 'startingFrom',
                month: getLocalizedMonth(availableFromDate), // Use the available-from date (10 days after project ends)
                year: availableFromDate.getFullYear()
            };
        } else {
            return {
                type: 'consultationOnly',
                month: getLocalizedMonth(endDate),
                year: endDate.getFullYear()
            };
        }
    };

    const badgeState = determineBadgeState();

    // Render appropriate badge based on state
    const renderBadge = () => {
        if (badgeState === 'open') {
            return (
                <div className="availability-badge availability-badge-open">
                    <i className="bi bi-check-circle-fill"></i>
                    {t('availabilityBadge.openForProjects')}
                </div>
            );
        } else if (badgeState.type === 'startingFrom') {
            return (
                <div className="availability-badge availability-badge-open">
                    <i className="bi bi-check-circle-fill"></i>
                    {t('availabilityBadge.openForProjectsStarting', {
                        month: badgeState.month,
                        year: badgeState.year
                    })}
                </div>
            );
        } else {
            return (
                <div className="availability-badge availability-badge-consultation">
                    <i className="bi bi-clock-history"></i>
                    {t('availabilityBadge.consultationOnly', {
                        month: badgeState.month,
                        year: badgeState.year
                    })}
                </div>
            );
        }
    };

    // Additional information to show on hover
    const getTooltipContent = () => {
        if (badgeState === 'open') {
            return t('availabilityBadge.tooltips.openForProjects');
        } else if (badgeState.type === 'startingFrom') {
            return t('availabilityBadge.tooltips.openForProjectsStarting', {
                month: badgeState.month,
                year: badgeState.year
            });
        } else {
            return t('availabilityBadge.tooltips.consultationOnly', {
                month: badgeState.month,
                year: badgeState.year
            });
        }
    };

    return (
        <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>{getTooltipContent()}</Tooltip>}
        >
            <div className="availability-badge-container">
                {renderBadge()}
            </div>
        </OverlayTrigger>
    );
};

export default AvailabilityBadge;