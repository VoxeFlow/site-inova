'use client';

import Link from 'next/link';

export default function WhatsAppTrackedLink({ href, onClick, ...props }) {
    return (
        <Link
            href={href}
            onClick={(e) => {
                if (onClick) onClick(e);
                if (e.defaultPrevented) return;
                e.preventDefault();
                if (typeof window.gtag_report_conversion === 'function') {
                    window.gtag_report_conversion(href);
                    return;
                }
                window.location.href = href;
            }}
            {...props}
        />
    );
}
