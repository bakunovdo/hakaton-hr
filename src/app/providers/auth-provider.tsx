import React from 'react';

type RoleTypes = 'ADMIN' | 'USER' | 'HR';

export const enum Roles {
  ADMIN = 'ADMIN',
  Candidate = 'USER',
  HR = 'HR',
}

type User = {
  email: string;
  role: RoleTypes;
};

type AuthContentxt = {
  user?: User | null;
};

const AuthContext = React.createContext<AuthContentxt>({});

export const AuthProvider = AuthContext.Provider;

export const useAuth = () => React.useContext(AuthContext);

// Helpers
const createHookRoleFactory = (role: Roles) => {
  return () => {
    const auth = useAuth();
    console.log(auth);
    return Boolean(auth.user && auth.user.role === role);
  };
};

export const useIsAdmin = createHookRoleFactory(Roles.ADMIN);
export const useIsHR = createHookRoleFactory(Roles.HR);
export const useIsCandidate = createHookRoleFactory(Roles.Candidate);

export const useIsAuthorized = () => Boolean(useAuth().user);
export const useIsNonAuthorized = () => !useIsAuthorized();

// Components Helpers
const createConditionFactory = (useHookFn: () => boolean, role?: string) => {
  const Component = ({ children }: { children: React.ReactNode }) => {
    const isTrue = useHookFn();

    if (isTrue) {
      return <>{children}</>;
    }

    return null;
  };

  Component.displayName = `${role}Condition`;

  return Component;
};

export const AdminCondition = createConditionFactory(useIsAdmin, Roles.ADMIN);
export const HRCondition = createConditionFactory(useIsHR, Roles.HR);
export const CandidateCondition = createConditionFactory(useIsCandidate, Roles.Candidate);

export const AuthorizedCondition = createConditionFactory(useIsAuthorized, 'Authorized');
export const NotAuthorizedCondition = createConditionFactory(useIsNonAuthorized, 'NotAuthorized');
