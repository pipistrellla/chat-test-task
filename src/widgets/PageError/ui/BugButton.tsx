import React, { FC, useEffect, useState } from 'react';

import { Button } from '@/shared/ui/Button/Button';

interface BugButtonProps {}

const BugButton: FC<BugButtonProps> = () => {
    const [error, setError] = useState(false);

    const throwError = () => setError(true);
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return <Button onClick={() => throwError()}>бросить ошибку</Button>;
};

export default BugButton;
