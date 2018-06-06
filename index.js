const crypto = require('crypto');

/**
 * sha256.
 */
exports.sha256 = (data, secret) => {
    const hash = crypto.createHmac('sha256', secret)
        .update(JSON.stringify(data))
        .digest('hex');

    return hash;
};

/**
 * md5.
 */
exports.md5 = (data) => {
    const hash = crypto.createHash('md5')
        .update(data)
        .digest('hex');

    return hash;
};
