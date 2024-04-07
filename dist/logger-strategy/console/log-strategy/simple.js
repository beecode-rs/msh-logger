import { typeUtil } from '@beecode/msh-util/type-util';
import { LogLevel } from '#src/log-level';
export class ConsoleLogStrategySimple {
    log(params, ...msgs) {
        const { type, meta, prefix, datetime = new Date() } = params;
        const fnName = ConsoleLogStrategySimple.LogTypeToFunctionName(type);
        /* eslint-disable no-console*/
        console[fnName](`${datetime.toISOString()} - ${type.toUpperCase()}: ${prefix ?? ''}`, ...msgs);
        if (meta) {
            console[fnName](meta);
        }
        /* eslint-enable no-console*/
    }
    static LogTypeToFunctionName(type) {
        switch (type) {
            case LogLevel.ERROR:
                return 'error';
            case LogLevel.WARN:
                return 'warn';
            case LogLevel.INFO:
                return 'info';
            case LogLevel.DEBUG:
                return 'log';
            default:
                throw typeUtil.exhaustiveError(`Unknown log level type [${type}]`, type);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xvZ2dlci1zdHJhdGVneS9jb25zb2xlL2xvZy1zdHJhdGVneS9zaW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFBO0FBRXRELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUl6QyxNQUFNLE9BQU8sd0JBQXdCO0lBQ3BDLEdBQUcsQ0FBQyxNQUErRSxFQUFFLEdBQUcsSUFBZTtRQUN0RyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLEVBQUUsR0FBRyxNQUFNLENBQUE7UUFDNUQsTUFBTSxNQUFNLEdBQUcsd0JBQXdCLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFbkUsOEJBQThCO1FBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsTUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssTUFBTSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUE7UUFDOUYsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNWLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN0QixDQUFDO1FBQ0QsNkJBQTZCO0lBQzlCLENBQUM7SUFFRCxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBYztRQUMxQyxRQUFRLElBQUksRUFBRSxDQUFDO1lBQ2QsS0FBSyxRQUFRLENBQUMsS0FBSztnQkFDbEIsT0FBTyxPQUFPLENBQUE7WUFDZixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLE1BQU0sQ0FBQTtZQUNkLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sTUFBTSxDQUFBO1lBQ2QsS0FBSyxRQUFRLENBQUMsS0FBSztnQkFDbEIsT0FBTyxLQUFLLENBQUE7WUFDYjtnQkFDQyxNQUFNLFFBQVEsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLElBQUksR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzFFLENBQUM7SUFDRixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlVXRpbCB9IGZyb20gJ0BiZWVjb2RlL21zaC11dGlsL3R5cGUtdXRpbCdcblxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tICcjc3JjL2xvZy1sZXZlbCdcbmltcG9ydCB7IE9iamVjdFR5cGUgfSBmcm9tICcjc3JjL2xvZ2dlci1zdHJhdGVneSdcbmltcG9ydCB7IENvbnNvbGVMb2dTdHJhdGVneSB9IGZyb20gJyNzcmMvbG9nZ2VyLXN0cmF0ZWd5L2NvbnNvbGUvbG9nLXN0cmF0ZWd5J1xuXG5leHBvcnQgY2xhc3MgQ29uc29sZUxvZ1N0cmF0ZWd5U2ltcGxlIGltcGxlbWVudHMgQ29uc29sZUxvZ1N0cmF0ZWd5IHtcblx0bG9nKHBhcmFtczogeyB0eXBlOiBMb2dMZXZlbDsgbWV0YT86IE9iamVjdFR5cGU7IGRhdGV0aW1lPzogRGF0ZTsgcHJlZml4Pzogc3RyaW5nIH0sIC4uLm1zZ3M6IHVua25vd25bXSk6IHZvaWQge1xuXHRcdGNvbnN0IHsgdHlwZSwgbWV0YSwgcHJlZml4LCBkYXRldGltZSA9IG5ldyBEYXRlKCkgfSA9IHBhcmFtc1xuXHRcdGNvbnN0IGZuTmFtZSA9IENvbnNvbGVMb2dTdHJhdGVneVNpbXBsZS5Mb2dUeXBlVG9GdW5jdGlvbk5hbWUodHlwZSlcblxuXHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUqL1xuXHRcdGNvbnNvbGVbZm5OYW1lXShgJHtkYXRldGltZS50b0lTT1N0cmluZygpfSAtICR7dHlwZS50b1VwcGVyQ2FzZSgpfTogJHtwcmVmaXggPz8gJyd9YCwgLi4ubXNncylcblx0XHRpZiAobWV0YSkge1xuXHRcdFx0Y29uc29sZVtmbk5hbWVdKG1ldGEpXG5cdFx0fVxuXHRcdC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSovXG5cdH1cblxuXHRzdGF0aWMgTG9nVHlwZVRvRnVuY3Rpb25OYW1lKHR5cGU6IExvZ0xldmVsKTogJ2xvZycgfCAnaW5mbycgfCAnd2FybicgfCAnZXJyb3InIHtcblx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdGNhc2UgTG9nTGV2ZWwuRVJST1I6XG5cdFx0XHRcdHJldHVybiAnZXJyb3InXG5cdFx0XHRjYXNlIExvZ0xldmVsLldBUk46XG5cdFx0XHRcdHJldHVybiAnd2Fybidcblx0XHRcdGNhc2UgTG9nTGV2ZWwuSU5GTzpcblx0XHRcdFx0cmV0dXJuICdpbmZvJ1xuXHRcdFx0Y2FzZSBMb2dMZXZlbC5ERUJVRzpcblx0XHRcdFx0cmV0dXJuICdsb2cnXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyB0eXBlVXRpbC5leGhhdXN0aXZlRXJyb3IoYFVua25vd24gbG9nIGxldmVsIHR5cGUgWyR7dHlwZX1dYCwgdHlwZSlcblx0XHR9XG5cdH1cbn1cbiJdfQ==