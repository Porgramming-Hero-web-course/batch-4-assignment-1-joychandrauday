{
    // interface and partial
    interface profile {
        name: string;
        age: number;
        email: string
    }

    function updateProfile(profile: profile, updates: Partial<profile>): profile{
        return {...profile, ...updates};
    }

}
