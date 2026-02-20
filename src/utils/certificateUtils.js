/**
 * Generates a unique certificate ID in the format HUM-YYYY-INT-AIX-XXXXX
 */
export const generateCertificateID = () => {
    const year = new Date().getFullYear();
    const randomDigits = Math.floor(10000 + Math.random() * 90000); // 5 digit random number
    return `HUM-${year}-INT-AIX-${randomDigits}`;
};

/**
 * Generates a SHA-256 hash of the certificate data for verification integrity.
 * @param {Object} data - { id, name, date, score }
 */
export const generateSecurityHash = async (data) => {
    const message = JSON.stringify(data);
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
};

/**
 * Generates the full verification URL with encoded parameters.
 */
export const generateVerificationURL = (baseOrigin, data) => {
    const params = new URLSearchParams();
    params.append('id', data.id);
    params.append('name', data.name);
    params.append('score', data.score);
    params.append('date', data.date);
    // params.append('hash', data.hash); // Hash checks happen on verify page or we can pass it
    return `${baseOrigin}/verify?${params.toString()}`;
};

export const getCurrentDateFormatted = () => {
    return new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
};
