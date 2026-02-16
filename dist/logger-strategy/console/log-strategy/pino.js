import { typeUtil } from '@beecode/msh-util/type-util';
import pino from 'pino';
import { LogLevel } from '#src/log-level.js';
export class ConsoleLogStrategyPino {
    _logger;
    constructor() {
        this._logger = pino();
    }
    log(params, ...msgs) {
        const { type, meta, prefix, datetime = new Date() } = params;
        const fnName = ConsoleLogStrategyPino.LogLevelToFunctionName(type);
        msgs.forEach((msg) => {
            const message = this._formatMessage(msg, prefix);
            const logObject = {
                ...meta,
                time: datetime.getTime(),
            };
            this._logger[fnName](logObject, message);
        });
    }
    _formatMessage(msg, prefix) {
        if (!msg) {
            return prefix ?? '';
        }
        if (typeof msg === 'object') {
            const { message } = msg;
            return this._joinDefined(prefix, message ?? JSON.stringify(msg));
        }
        if (typeof msg === 'string') {
            return this._joinDefined(prefix, msg);
        }
        // eslint-disable-next-line @typescript-eslint/no-base-to-string -- msg is a primitive at this point (string/object cases handled above)
        return this._joinDefined(prefix, String(msg));
    }
    _joinDefined(prefix, msg) {
        return [prefix, msg].filter(Boolean).join(' ');
    }
    static LogLevelToFunctionName(type) {
        switch (type) {
            case LogLevel.ERROR:
                return 'error';
            case LogLevel.WARN:
                return 'warn';
            case LogLevel.INFO:
                return 'info';
            case LogLevel.DEBUG:
                return 'debug';
            default:
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                throw typeUtil.exhaustiveError(`Unknown log level type [${type}]`, type);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9sb2dnZXItc3RyYXRlZ3kvY29uc29sZS9sb2ctc3RyYXRlZ3kvcGluby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUE7QUFDdEQsT0FBTyxJQUFxQixNQUFNLE1BQU0sQ0FBQTtBQUV4QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFJNUMsTUFBTSxPQUFPLHNCQUFzQjtJQUN4QixPQUFPLENBQVE7SUFFekI7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksRUFBRSxDQUFBO0lBQ3RCLENBQUM7SUFFRCxHQUFHLENBQUMsTUFBK0UsRUFBRSxHQUFHLElBQWU7UUFDdEcsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsR0FBRyxJQUFJLElBQUksRUFBRSxFQUFFLEdBQUcsTUFBTSxDQUFBO1FBQzVELE1BQU0sTUFBTSxHQUFHLHNCQUFzQixDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFBO1FBRWxFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNwQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQTtZQUNoRCxNQUFNLFNBQVMsR0FBRztnQkFDakIsR0FBRyxJQUFJO2dCQUNQLElBQUksRUFBRSxRQUFRLENBQUMsT0FBTyxFQUFFO2FBQ3hCLENBQUE7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUN6QyxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFUyxjQUFjLENBQUMsR0FBWSxFQUFFLE1BQWU7UUFDckQsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ1YsT0FBTyxNQUFNLElBQUksRUFBRSxDQUFBO1FBQ3BCLENBQUM7UUFFRCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQzdCLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUEyQixDQUFBO1lBRS9DLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNqRSxDQUFDO1FBRUQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUM3QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ3RDLENBQUM7UUFFRCx3SUFBd0k7UUFDeEksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0lBRVMsWUFBWSxDQUFDLE1BQWUsRUFBRSxHQUFZO1FBQ25ELE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0lBRUQsTUFBTSxDQUFDLHNCQUFzQixDQUFDLElBQWM7UUFDM0MsUUFBUSxJQUFJLEVBQUUsQ0FBQztZQUNkLEtBQUssUUFBUSxDQUFDLEtBQUs7Z0JBQ2xCLE9BQU8sT0FBTyxDQUFBO1lBQ2YsS0FBSyxRQUFRLENBQUMsSUFBSTtnQkFDakIsT0FBTyxNQUFNLENBQUE7WUFDZCxLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLE1BQU0sQ0FBQTtZQUNkLEtBQUssUUFBUSxDQUFDLEtBQUs7Z0JBQ2xCLE9BQU8sT0FBTyxDQUFBO1lBQ2Y7Z0JBQ0MsNEVBQTRFO2dCQUM1RSxNQUFNLFFBQVEsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLElBQUksR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzFFLENBQUM7SUFDRixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlVXRpbCB9IGZyb20gJ0BiZWVjb2RlL21zaC11dGlsL3R5cGUtdXRpbCdcbmltcG9ydCBwaW5vLCB7IHR5cGUgTG9nZ2VyIH0gZnJvbSAncGlubydcblxuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tICcjc3JjL2xvZy1sZXZlbC5qcydcbmltcG9ydCB7IHR5cGUgQ29uc29sZUxvZ1N0cmF0ZWd5IH0gZnJvbSAnI3NyYy9sb2dnZXItc3RyYXRlZ3kvY29uc29sZS9sb2ctc3RyYXRlZ3kuanMnXG5pbXBvcnQgeyB0eXBlIE9iamVjdFR5cGUgfSBmcm9tICcjc3JjL2xvZ2dlci1zdHJhdGVneS5qcydcblxuZXhwb3J0IGNsYXNzIENvbnNvbGVMb2dTdHJhdGVneVBpbm8gaW1wbGVtZW50cyBDb25zb2xlTG9nU3RyYXRlZ3kge1xuXHRwcm90ZWN0ZWQgX2xvZ2dlcjogTG9nZ2VyXG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5fbG9nZ2VyID0gcGlubygpXG5cdH1cblxuXHRsb2cocGFyYW1zOiB7IHR5cGU6IExvZ0xldmVsOyBtZXRhPzogT2JqZWN0VHlwZTsgZGF0ZXRpbWU/OiBEYXRlOyBwcmVmaXg/OiBzdHJpbmcgfSwgLi4ubXNnczogdW5rbm93bltdKTogdm9pZCB7XG5cdFx0Y29uc3QgeyB0eXBlLCBtZXRhLCBwcmVmaXgsIGRhdGV0aW1lID0gbmV3IERhdGUoKSB9ID0gcGFyYW1zXG5cdFx0Y29uc3QgZm5OYW1lID0gQ29uc29sZUxvZ1N0cmF0ZWd5UGluby5Mb2dMZXZlbFRvRnVuY3Rpb25OYW1lKHR5cGUpXG5cblx0XHRtc2dzLmZvckVhY2goKG1zZykgPT4ge1xuXHRcdFx0Y29uc3QgbWVzc2FnZSA9IHRoaXMuX2Zvcm1hdE1lc3NhZ2UobXNnLCBwcmVmaXgpXG5cdFx0XHRjb25zdCBsb2dPYmplY3QgPSB7XG5cdFx0XHRcdC4uLm1ldGEsXG5cdFx0XHRcdHRpbWU6IGRhdGV0aW1lLmdldFRpbWUoKSxcblx0XHRcdH1cblx0XHRcdHRoaXMuX2xvZ2dlcltmbk5hbWVdKGxvZ09iamVjdCwgbWVzc2FnZSlcblx0XHR9KVxuXHR9XG5cblx0cHJvdGVjdGVkIF9mb3JtYXRNZXNzYWdlKG1zZzogdW5rbm93biwgcHJlZml4Pzogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRpZiAoIW1zZykge1xuXHRcdFx0cmV0dXJuIHByZWZpeCA/PyAnJ1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgbXNnID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Y29uc3QgeyBtZXNzYWdlIH0gPSBtc2cgYXMgeyBtZXNzYWdlPzogc3RyaW5nIH1cblxuXHRcdFx0cmV0dXJuIHRoaXMuX2pvaW5EZWZpbmVkKHByZWZpeCwgbWVzc2FnZSA/PyBKU09OLnN0cmluZ2lmeShtc2cpKVxuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgbXNnID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2pvaW5EZWZpbmVkKHByZWZpeCwgbXNnKVxuXHRcdH1cblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tYmFzZS10by1zdHJpbmcgLS0gbXNnIGlzIGEgcHJpbWl0aXZlIGF0IHRoaXMgcG9pbnQgKHN0cmluZy9vYmplY3QgY2FzZXMgaGFuZGxlZCBhYm92ZSlcblx0XHRyZXR1cm4gdGhpcy5fam9pbkRlZmluZWQocHJlZml4LCBTdHJpbmcobXNnKSlcblx0fVxuXG5cdHByb3RlY3RlZCBfam9pbkRlZmluZWQocHJlZml4Pzogc3RyaW5nLCBtc2c/OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdHJldHVybiBbcHJlZml4LCBtc2ddLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJylcblx0fVxuXG5cdHN0YXRpYyBMb2dMZXZlbFRvRnVuY3Rpb25OYW1lKHR5cGU6IExvZ0xldmVsKTogJ2Vycm9yJyB8ICd3YXJuJyB8ICdpbmZvJyB8ICdkZWJ1Zycge1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0Y2FzZSBMb2dMZXZlbC5FUlJPUjpcblx0XHRcdFx0cmV0dXJuICdlcnJvcidcblx0XHRcdGNhc2UgTG9nTGV2ZWwuV0FSTjpcblx0XHRcdFx0cmV0dXJuICd3YXJuJ1xuXHRcdFx0Y2FzZSBMb2dMZXZlbC5JTkZPOlxuXHRcdFx0XHRyZXR1cm4gJ2luZm8nXG5cdFx0XHRjYXNlIExvZ0xldmVsLkRFQlVHOlxuXHRcdFx0XHRyZXR1cm4gJ2RlYnVnJ1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9yZXN0cmljdC10ZW1wbGF0ZS1leHByZXNzaW9uc1xuXHRcdFx0XHR0aHJvdyB0eXBlVXRpbC5leGhhdXN0aXZlRXJyb3IoYFVua25vd24gbG9nIGxldmVsIHR5cGUgWyR7dHlwZX1dYCwgdHlwZSlcblx0XHR9XG5cdH1cbn1cbiJdfQ==